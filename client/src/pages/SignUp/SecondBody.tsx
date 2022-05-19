import React, { useContext, useState } from 'react';
import { SignUpContext } from '../../components/store/SIgnUpContext';
import { useRegisterMutation } from '../../graphql/generated/graphql';
import { Props } from './FirstBody';

export interface ISValidState {
	status: boolean;
	message: string;
}

const SecondBody: React.FC<Props> = ({ setNextPage }) => {
	const { signUpInfo } = useContext(SignUpContext);
	const [form, setForm] = useState(signUpInfo);
	const [isValid, setIsValid] = useState<ISValidState>({
		status: true,
		message: '',
	});
	const [register] = useRegisterMutation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value.trim(),
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.password) {
			setIsValid({ status: false, message: 'Please enter your password' });
		} else if (form.password.length < 6) {
			setIsValid({
				status: false,
				message: `Please use at least 6 character. You are currently using ${form.password.length} character`,
			});
		} else {
			await register({
				variables: {
					registerInput: { email: form.email, password: form.password },
				},
			});
			setNextPage(2);
		}
	};

	return (
		<div className='max-w-[500px] mt-12 mx-9 sm:w-8/12 sm:mx-auto'>
			<p className='text-sm'>
				STEP <b>1</b> OF <b>3</b>
			</p>
			<h3 className='text-3xl font-bold'>
				Welcome back!
				<br />
				Joining Netflix is easy.
			</h3>
			<h4 className='text-xl my-3'>
				Enter you password and you'll be watching in no time.
			</h4>
			<h5 className='mt-4'>Email</h5>
			<p className='font-semibold'>{signUpInfo.email}</p>
			<form
				method='post'
				className='mt-5 relative w-full'
				onSubmit={handleSubmit}
			>
				<input
					type='password'
					name='password'
					value={form.password}
					className='w-full h-[3.75rem] pl-4 text-black form__item--input rounded border'
					onChange={handleChange}
					required
				/>
				<label
					htmlFor='password'
					className='absolute text-neutral-400 top-4 lg:text-lg form__item--label'
				>
					Enter your password
				</label>
				{!isValid.status && (
					<p className='text-orange-500'>{isValid.message}</p>
				)}
				<p className='text-blue-600 font-medium text-lg my-7'>
					Forgot your password?
				</p>
				<button
					type='submit'
					className='w-full text-white bg-primary rounded lg:mt-0 py-4 text-3xl hover:bg-red-500 mb-40'
				>
					Next
				</button>
			</form>
		</div>
	);
};

export default SecondBody;
