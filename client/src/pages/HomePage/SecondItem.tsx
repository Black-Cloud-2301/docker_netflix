const SecondItem = () => {
	return (
		<section className='min-h-[480px] sm:min-h-[640px] 2xl:mx-auto lg:h-auto lg:py-20 lg:flex px-2 2xl:px-40 lg:px-16 lg:gap-x-10 2xl:gap-x-20 border-b-8 border-neutral-800'>
			<article className='lg:w-6/12 my-auto'>
				<div className='text-white flex flex-col justify-center text-center lg:text-left'>
					<h4 className='mt-7 text-2xl sm:text-4xl lg:text-5xl font-bold'>
						Enjoy on your TV.
					</h4>
					<p className='text-lg font-medium sm:px-10 lg:px-0 sm:text-xl lg:text-2xl mt-5'>
						Watch on SmartTVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</p>
				</div>
			</article>
			<img
				src='/images/tv.png'
				alt='tv'
				className='object-cover w-10/12 lg:w-6/12 mx-auto'
			/>
		</section>
	);
};

export default SecondItem;
