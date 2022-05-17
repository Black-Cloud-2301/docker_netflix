import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SignUpContext } from '../../components/store/SIgnUpContext';

const FirstItem = () => {
	const navigate = useNavigate();
	const { signUpInfo, setSignUpInfo } = useContext(SignUpContext);
	const [emailInput, setEmailInput] = useState<string>(signUpInfo.email);
	const [isValid, setIsValid] = useState(true);

	const handleClick = () => {
		if (!emailInput.includes('.') || !emailInput.includes('@')) {
			setIsValid(false);
		} else {
			setIsValid(true);
			setSignUpInfo({
				email: emailInput,
				password: '',
			});
			navigate('/signUp');
		}
	};

	return (
		<section className='relative border-b-8 border-neutral-800'>
			<img
				src='/images/home-bg.jpg'
				alt='home'
				className='min-h-[500px] sm:min-h-[700px] object-cover'
			/>
			<div className='absolute top-0 w-full h-full bg-gradient-to-b from-black_opa_90 via-black_opa_40 to-black_opa_90'>
				<header className='flex justify-between px-4 py-6 sm:px-6 sm:py-8'>
					<div className='w-24 sm:w-32 flex justify-center items-center'>
						<img src='/images/netflix.png' alt='logo' />
					</div>
					<div className='w-48 sm:w-52 flex justify-between'>
						<div className='flex relative bg-black text-white border border-white px-1'>
							<img
								src='/icons/language.svg'
								alt='language'
								width={16}
								className='absolute top-0 bottom-0 h-full'
							/>
							<select className='bg-transparent text-white pl-5 text-sm'>
								<option value='en' className='bg-white text-black pl-5 text-sm'>
									English
								</option>
								<option value='vn' className='bg-white text-black pl-5 text-sm'>
									Tiếng Việt
								</option>
							</select>
						</div>
						<NavLink
							to={'signIn'}
							className='text-white bg-primary hover:opacity-80 rounded px-2 py-1 text-xs sm:text-base font-semibold'
						>
							Sign In
						</NavLink>
					</div>
				</header>
				<div className='text-white flex flex-col justify-center items-center h-full w-10/12 lg:w-8/12 2xl:w-6/12 mx-auto'>
					<h3 className='text-2xl sm:text-5xl 2xl:text-6xl lg:w-9/12 2xl:w-full 2xl:leading-snug font-bold text-center'>
						Unlimited movies, TV shows, and more.
					</h3>
					<h4 className='text-lg sm:text-2xl sm:font-semibold tracking-wide my-4 2xl:my-6'>
						Watch anywhere. Cancel anytime.
					</h4>
					<h5 className='text-lg text-center leading-6'>
						Ready to watch? Enter your email to create or restart your
						membership.
					</h5>
					<div className='mt-2 lg:mt-5 relative w-full h-48'>
						<input
							type='text'
							id='emailInput'
							className='w-full h-12 lg:h-16 pl-4 text-black form__item--input lg:rounded-r'
							value={emailInput}
							required
							onChange={(e) => setEmailInput(e.target.value)}
						/>
						<label
							htmlFor='emailInput'
							className='absolute text-neutral-400 top-3 lg:top-4 lg:text-lg form__item--label'
						>
							Email address
						</label>
						{!isValid && (
							<p className='text-orange-500'>
								Please enter a valid email address
							</p>
						)}
						<button
							className='lg:absolute lg:right-0 lg:top-0 lg:h-16 w-40 lg:w-60 text-white bg-primary rounded lg:rounded-none lg:rounded-r mx-auto mt-4 lg:mt-0 px-4 py-2 lg:text-2xl lg:font-semibold flex justify-center items-center'
							onClick={handleClick}
						>
							<p className='mb-1'>Get Started</p>
							<img
								src='/icons/arrow_forward.svg'
								alt='arrow_forward'
								className='ml-4 w-4'
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FirstItem;
