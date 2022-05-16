import React from 'react';

const ThirdBody = () => {
	return (
		<div className='max-w-[340px] mt-12 mx-auto py-20 sm:text-center'>
			<img
				src='/images/checkmark.png'
				alt='checkmark'
				className='h-12 sm:mx-auto'
			/>
			<p className='text-sm mt-4'>
				STEP <b>2</b> OF <b>3</b>
			</p>
			<h3 className='text-3xl font-bold'>Choose your plan.</h3>
			<ul>
				<li className='flex my-6'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-xl text-left'>
						No commitments, cancel anytime.
					</span>
				</li>
				<li className='flex my-6'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-xl text-left'>
						Everything on Netflix for one low price.
					</span>
				</li>
				<li className='flex my-6'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-xl text-left'>
						No ads and no extra fees. Ever.
					</span>
				</li>
			</ul>
			<button className='w-full text-white bg-primary rounded mt-6 mb-16 py-3 text-3xl hover:bg-red-500'>
				Next
			</button>
		</div>
	);
};

export default ThirdBody;
