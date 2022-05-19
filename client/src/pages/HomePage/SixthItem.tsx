const SixthItem = () => {
	return (
		<section className='lg:flex lg:px-20 py-16 border-b-8 border-neutral-800 gap-5'>
			<article className='lg:w-6/12 text-white flex flex-col justify-center px-6 lg:px-20 text-center lg:text-left'>
				<h4 className='text-2xl sm:text-4xl lg:text-5xl font-bold'>
					Have an Android Phone? Get our new free plan!
				</h4>
				<p className='text-xl sm:text-2xl mt-4 lg:mt-8'>
					Watch a selection of new movies and TV shows without adding any
					payment details!
				</p>
				<div className='flex mt-4 justify-center lg:justify-start'>
					<p className='text-xl lg:text-2xl'>Get the app</p>
					<img
						src='/icons/arrow_forward.svg'
						alt='arrow_forward'
						className='ml-4 mt-[6px] lg:mt-1'
					/>
				</div>
			</article>
			<article className='lg:w-6/12 mt-6 lg:mt-0'>
				<img src='/images/vn.jpg' alt='vn' />
			</article>
		</section>
	);
};

export default SixthItem;
