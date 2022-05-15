import React from 'react';

const ThirdItem = () => {
	return (
		<section className='flex flex-col-reverse lg:flex-row justify-center lg:p-8 lg:gap-x-10 border-b-8 border-neutral-800'>
			<article className='relative lg:w-6/12'>
				<img
					src='/images/mobile-0819.jpg'
					alt='mobile-0819'
					className='object-cover w-10/12 lg:w-full 2xl:w-8/12 mx-auto'
				/>
				<div className='flex border-2 border-neutral-600 rounded-2xl p-2 w-9/12 sm:w-7/12 2xl:w-5/12 items-center justify-between bg-black absolute bottom-6 2xl:bottom-0 left-0 right-0 mx-auto'>
					<img
						src='/images/boxshot.png'
						alt='boxshot'
						className='object-cover w-10 sm:w-12 2xl:w-16'
					/>
					<p className='text-white font-bold ml-4 sm:ml-0'>Downloading...</p>
					<img src='/icons/download-icon.gif' alt='download-icon' width={50} />
				</div>
			</article>
			<article className='lg:w-6/12 px-6 mt-12'>
				<div className='text-white flex flex-col justify-center h-full text-center lg:text-left'>
					<h4 className='text-3xl sm:text-4xl sm:px-8 lg:text-5xl font-bold'>
						Download your shows to watch offline.
					</h4>
					<p className='text-xl lg:text-2xl mt-5 sm:px-6'>
						Save your favorites easily and always have something to watch.
					</p>
				</div>
			</article>
		</section>
	);
};

export default ThirdItem;
