import React from 'react';
import { Link } from 'react-router-dom';
import { HomeQuestion } from '../../data/homeData';
import FrequentlyQuestions, { QuestionProps } from './FrequentlyQuestions';

const SeventhItem = () => {
	return (
		<section className='border-b-8 border-neutral-800'>
			<h3 className='text-white text-center text-2xl sm:text-4xl lg:text-6xl font-bold mt-6 sm:mt-16 mb-4 sm:mb-8 lg:mb-12'>
				Frequently Asked Questions
			</h3>
			{HomeQuestion.map((props: QuestionProps) => {
				return <FrequentlyQuestions {...props} />;
			})}
			<div className='px-4 sm:px-16'>
				<p className='text-white m-4 lg:mt-16 text-xl text-center'>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className='mt-2 lg:mt-5 relative w-full h-48 lg:w-7/12 mx-auto'>
					<input
						type='text'
						id='emailInput'
						className='w-full h-12 lg:h-16 pl-4 text-black form__item--input lg:rounded-r'
						required
					/>
					<label
						htmlFor='emailInput'
						className='absolute text-neutral-400 top-3 lg:top-4 lg:text-lg form__item--label'
					>
						Email address
					</label>
					<Link
						to={'signUp'}
						type='submit'
						className='lg:absolute lg:right-0 lg:top-0 lg:h-16 w-40 lg:w-60 text-white bg-primary rounded lg:rounded-none lg:rounded-r mx-auto mt-4 lg:mt-0 px-4 py-2 lg:text-2xl lg:font-semibold flex justify-center items-center'
					>
						<p className='mb-1'>Get Started</p>
						<img
							src='/icons/arrow_forward.svg'
							alt='arrow_forward'
							className='ml-4 w-4'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SeventhItem;
