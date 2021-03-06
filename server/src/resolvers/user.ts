import { RegisterInput } from '../types/RegisterInput';
import { Arg, Ctx, ID, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entities/User';
import argon2 from 'argon2';
import { UserMutationResponse } from '../types/UserMutationResponse';
import { LoginInput } from '../types/LoginInput';
import { createToken, sendRefreshToken } from '../utils/auth';
import { Context } from '../types/Context';

@Resolver()
export class UserResolver {
	@Query((_return) => [User])
	async users(): Promise<User[]> {
		return await User.find();
	}

	@Mutation((_return) => UserMutationResponse)
	async register(
		@Arg('registerInput')
		registerInput: RegisterInput
	): Promise<UserMutationResponse> {
		const { email, password } = registerInput;

		const existingUser = await User.findOne({
			where: {
				email,
			},
		});

		if (existingUser) {
			return {
				code: 400,
				success: false,
				field: 'email',
				message: 'Duplicated email',
			};
		}

		const hashedPassword = await argon2.hash(password);

		const newUser = User.create({
			email,
			password: hashedPassword,
		});

		await newUser.save();

		return {
			code: 200,
			success: true,
			message: 'User registration successfully',
			user: newUser,
		};
	}

	@Mutation((_return) => UserMutationResponse)
	async login(
		@Arg('loginInput') { email, password }: LoginInput,
		@Ctx() { res }: Context
	): Promise<UserMutationResponse> {
		const existingUser = await User.findOne({ where: { email } });

		if (!existingUser) {
			return {
				code: 400,
				success: false,
				field: 'email',
				message: 'User not found',
			};
		}

		const isPasswordValid = await argon2.verify(
			existingUser.password,
			password
		);

		if (!isPasswordValid) {
			return {
				code: 400,
				success: false,
				field: 'password',
				message: 'Incorrect password',
			};
		}

		sendRefreshToken(res, existingUser);

		return {
			code: 200,
			success: true,
			message: 'Logged in successfully',
			user: existingUser,
			accessToken: createToken('accessToken', existingUser),
		};
	}

	@Mutation((_return) => UserMutationResponse)
	async logout(
		@Arg('userId', (_type) => ID) userId: number,
		@Ctx() { res }: Context
	): Promise<UserMutationResponse> {
		const existingUser = await User.findOneBy({ id: userId });

		if (!existingUser) {
			return {
				code: 400,
				success: false,
			};
		}

		existingUser.tokenVersion++;

		await existingUser.save();

		res.clearCookie(process.env.REFRESH_TOKEN_COOKIE_NAME as string, {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
			path: '/refresh_token',
		});

		return {
			code: 200,
			success: true,
		};
	}
}
