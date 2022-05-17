import { useState } from 'react';
import Header from '../SignUp/Header';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';

const MainBody = () => {
	const [notRemember, setNotRemember] = useState<boolean>(false);
	const [learnMore, setLearnMore] = useState(false);

	return (
		<div className='bg-black relative'>
			<Header />
			<img
				src='/images/forgot-email-bg.jpg'
				alt='forgot-email-bg'
				className='w-full min-h-[1000px] object-cover'
			/>
			<div className='absolute left-0 right-0 top-40  max-w-[450px] max-h-[650px] mx-auto bg-neutral-100 p-5 sm:px-10'>
				<h3 className='text-3xl font-semibold'>Forgot Email/Password</h3>
				{!notRemember ? (
					<FirstPart setNotRemember={setNotRemember} />
				) : (
					<SecondPart setNotRemember={setNotRemember} />
				)}
				<p className='text-neutral-400 leading-tight mt-6'>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
					{!learnMore && (
						<button className='underline' onClick={() => setLearnMore(true)}>
							Learn more.
						</button>
					)}
				</p>
				<p
					className={
						learnMore ? 'text-neutral-400 leading-tight mt-6' : 'opacity-0'
					}
				>
					The information collected by Google reCAPTCHA is subject to the Google{' '}
					<a href='https://policies.google.com/privacy' className='underline'>
						Privacy Policy
					</a>{' '}
					and{' '}
					<a href='https://policies.google.com/terms' className='underline'>
						Terms of Service
					</a>
					, and is used for providing, maintaining, and improving the reCAPTCHA
					service and for general security purposes (it is not used for
					personalized advertising by Google).
				</p>
			</div>
		</div>
	);
};

export default MainBody;
