import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainBody = () => {
	const [learnMore, setLearnMore] = useState(false);

	return (
		<div className='relative min-h-[700px]'>
			<img
				src='/images/netflix-bg-signIn.jpg'
				alt='netflix-bg-signIn'
				className='sm:min-h-[800px] object-cover hidden sm:block'
			/>
			<div className='absolute top-0 bottom-0 left-0 right-0 opacity-60 bg-black' />
			<div className='absolute min-h-[600px] sm:min-h-[800px] top-0 bottom-0 left-0 right-0 p-4 bg-black sm:bg-transparent'>
				<div className='w-24 sm:w-32 flex justify-center items-center'>
					<img src='/images/netflix.png' alt='logo' />
				</div>
				<div className='min-h-[600px] sm:max-w-[450px] m-auto sm:pb-4 sm:pt-12 px-4 sm:px-16 mt-4 sm:mt-12 bg-black'>
					<h3 className='text-3xl text-white font-bold'>Sign In</h3>
					<form action='' method='post' className='mt-5'>
						<div className='relative w-full'>
							<input
								type='text'
								id='password'
								name='password'
								// value={form.password}
								className='w-full h-[3rem] pl-4 bg-neutral-700 text-white font-medium form__item--input rounded'
								// onChange={handleChange}
								required
							/>
							<label
								htmlFor='password'
								className='absolute text-neutral-400 top-3 lg:text-lg form__item--label'
							>
								Email or phone number
							</label>
						</div>
						<div className='relative w-full mt-5'>
							<input
								type='text'
								id='password'
								name='password'
								// value={form.password}
								className='w-full h-[3rem] pl-4 bg-neutral-700 text-white font-medium form__item--input rounded'
								// onChange={handleChange}
								required
							/>
							<label
								htmlFor='password'
								className='absolute text-neutral-400 top-3 lg:text-lg form__item--label'
							>
								Password
							</label>
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
								className='h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-neutral-400 checked:border-neutral-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
							/>
							<label
								htmlFor='agree'
								className='ml-1 text-neutral-400 text-sm font-semibold'
							>
								Remember me
							</label>
						</div>
						<NavLink to={'/forgotEmail'} className='text-neutral-400 text-sm'>
							Need help?
						</NavLink>
					</div>
					<div>
						<div className='flex mt-4 sm:mt-16'>
							<p className='text-neutral-400'>New to Netflix?</p>
							<NavLink
								to={'signUp'}
								className='text-white ml-2 hover:underline'
							>
								Sign up now
							</NavLink>
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
