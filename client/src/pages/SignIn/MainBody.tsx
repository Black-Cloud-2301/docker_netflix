import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../components/store/AuthContext';
import { useLoginMutation } from '../../graphql/generated/graphql';
import JWTManager from '../../utils/jwt';

interface FormInputState {
	email: string;
	password: string;
}

interface IsValidState {
	email: {
		status: boolean;
		message: string;
	};
	password: {
		status: boolean;
		message: string;
	};
}

const MainBody = () => {
	const navigate = useNavigate();
	const { setIsAuthenticated } = useAuthContext();
	const [learnMore, setLearnMore] = useState<boolean>(false);
	const [checked, setChecked] = useState<boolean>(true);
	const [formInput, setFormInput] = useState<FormInputState>({
		email: '',
		password: '',
	});
	const [isValid, setIsValid] = useState<IsValidState>({
		email: { status: true, message: '' },
		password: { status: true, message: '' },
	});

	const [login] = useLoginMutation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value.trim(),
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let flag = true;
		if (!formInput.email) {
			flag = false;
			setIsValid((prevState) => ({
				...prevState,
				email: { status: false, message: 'Please enter your email' },
			}));
			console.log(isValid);
		} else if (
			!formInput.email.includes('@') ||
			!formInput.email.includes('.')
		) {
			flag = false;
			setIsValid((prevState) => ({
				...prevState,
				email: {
					status: false,
					message: `Please enter valid email`,
				},
			}));
		} else {
			setIsValid((prevState) => ({
				...prevState,
				email: {
					status: true,
					message: '',
				},
			}));
		}
		if (!formInput.password) {
			flag = false;
			setIsValid((prevState) => ({
				...prevState,
				password: { status: false, message: 'Please enter your password' },
			}));
		} else if (formInput.password.length < 6) {
			flag = false;
			setIsValid((prevState) => ({
				...prevState,
				password: {
					status: false,
					message: `Please use at least 6 character. You are currently using ${formInput.password.length} character`,
				},
			}));
		} else {
			setIsValid((prevState) => ({
				...prevState,
				password: {
					status: true,
					message: '',
				},
			}));
		}
		if (flag) {
			const response = await login({
				variables: {
					loginInput: { email: formInput.email, password: formInput.password },
				},
			});
			if (response.data?.login.success) {
				JWTManager.setToken(response.data.login.accessToken as string);
				setIsAuthenticated(true);
				navigate('/');
			} else {
				if (response.data?.login.field === 'password') {
					setIsValid((prevState) => ({
						...prevState,
						password: {
							status: false,
							message: response.data?.login.message ?? '',
						},
					}));
				} else if (response.data?.login.field === 'email') {
					setIsValid((prevState) => ({
						...prevState,
						email: {
							status: false,
							message: response.data?.login.message ?? '',
						},
					}));
				}
			}
		}
	};

	return (
		<div className='relative min-h-[700px]'>
			<img
				src='/images/netflix-bg-signIn.jpg'
				alt='netflix-bg-signIn'
				className='sm:min-h-[800px] object-cover hidden sm:block'
			/>
			<div className='absolute top-0 bottom-0 left-0 right-0 opacity-60 bg-black' />
			<div className='absolute min-h-[600px] sm:min-h-[800px] top-0 bottom-0 left-0 right-0 p-4 bg-black sm:bg-transparent'>
				<Link
					to={'/'}
					className='w-24 sm:w-32 flex justify-center items-center'
				>
					<img src='/images/netflix.png' alt='logo' />
				</Link>
				<div className='min-h-[600px] sm:max-w-[450px] m-auto sm:pb-4 sm:pt-12 px-4 sm:px-16 mt-4 sm:mt-12 bg-black'>
					<h3 className='text-3xl text-white font-bold mb-5'>Sign In</h3>
					<form method='post' className='' onSubmit={handleSubmit}>
						<div className='relative w-full'>
							<input
								type='text'
								name='email'
								value={formInput.email}
								className={
									isValid.email.status
										? 'w-full h-[3rem] pl-4 bg-neutral-700 text-white font-medium form__item--input rounded'
										: 'w-full h-[3rem] pl-4 bg-neutral-700 border border-orange-500 text-white font-medium form__item--input rounded'
								}
								autoComplete='off'
								onChange={handleChange}
								required
							/>
							<label
								htmlFor='email'
								className='absolute text-neutral-400 top-3 lg:text-lg form__item--label'
							>
								Email or phone number
							</label>
							{!isValid.email.status && (
								<p className='text-orange-500'>{isValid.email.message}</p>
							)}
						</div>
						<div className='relative w-full mt-5'>
							<input
								type='password'
								name='password'
								value={formInput.password}
								className={
									isValid.password.status
										? 'w-full h-[3rem] pl-4 bg-neutral-700 text-white font-medium form__item--input rounded'
										: 'w-full h-[3rem] pl-4 bg-neutral-700 border border-orange-500 text-white font-medium form__item--input rounded'
								}
								autoComplete='off'
								onChange={handleChange}
								required
							/>
							<label
								htmlFor='password'
								className='absolute text-neutral-400 top-3 lg:text-lg form__item--label'
							>
								Password
							</label>
							{!isValid.password.status && (
								<p className='text-orange-500'>{isValid.password.message}</p>
							)}
						</div>
						<button
							type='submit'
							className='w-full h-12 text-white bg-red-600 hover:bg-red-500 rounded mt-10 sm:text-base font-semibold'
						>
							Sign In
						</button>
					</form>
					<div className='flex mt-3 justify-between items-center'>
						<div className=''>
							<input
								type='checkbox'
								name='agree'
								id='agree'
								checked={checked}
								onChange={() => setChecked(!checked)}
								className='h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-400 checked:border-neutral-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
							/>
							<label
								htmlFor='agree'
								className='ml-1 text-neutral-400 text-sm font-semibold'
							>
								Remember me
							</label>
						</div>
						<Link to={'/forgotEmail'} className='text-neutral-400 text-sm'>
							Need help?
						</Link>
					</div>
					<div>
						<div className='flex mt-4 sm:mt-16'>
							<p className='text-neutral-400'>New to Netflix?</p>
							<Link to={'/signUp'} className='text-white ml-2 hover:underline'>
								Sign up now
							</Link>
						</div>
						<p className='text-neutral-400 text-sm mt-4'>
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot.{' '}
							{!learnMore && (
								<button
									className='text-blue-500'
									onClick={() => setLearnMore(true)}
								>
									Learn more
								</button>
							)}
						</p>
						{learnMore && (
							<p className='text-neutral-400 text-sm mt-4'>
								The information collected by Google reCAPTCHA is subject to the
								Google{' '}
								<a
									href='https://policies.google.com/privacy'
									className='text-blue-500'
								>
									Privacy Policy
								</a>{' '}
								and{' '}
								<a
									href='https://policies.google.com/terms'
									className='text-blue-500'
								>
									Terms of Service
								</a>
								, and is used for providing, maintaining, and improving the
								reCAPTCHA service and for general security purposes (it is not
								used for personalized advertising by Google).
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainBody;
