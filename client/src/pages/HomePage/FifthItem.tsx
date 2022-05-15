import React from 'react';

const FifthItem = () => {
	return (
		<section className='flex flex-col-reverse lg:flex-row lg:px-20 py-12 border-b-8 border-neutral-800 gap-5'>
			<article className='lg:w-6/12 lg:p-8'>
				<img src='/images/kidsValueProp.png' alt='kidsValueProp' />
			</article>
			<article className='lg:w-6/12 text-white flex flex-col justify-center items-left text-center lg:text-left px-3 sm:px-12 lg:px-0'>
				<h4 className='text-3xl lg:text-5xl font-semibold lg:font-bold'>
					Create profiles for kids.
				</h4>
				<p className='text-xl lg:text-3xl mt-4 lg:mt-8'>
					Send kids on adventures with their favorite characters in a space made
					just for them -- free with your membership
				</p>
			</article>
		</section>
	);
};

export default FifthItem;
