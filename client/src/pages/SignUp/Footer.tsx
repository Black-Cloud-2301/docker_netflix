const Footer = () => {
	return (
		<div className='w-full px-6 lg:px-12 2xl:px-20 text-neutral-500 font-medium bg-neutral-100 pb-6'>
			<div className='py-8'>
				<a href='https://help.netflix.com/en/contactus'>
					Questions? Contact us.
				</a>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 text-sm 2xl:text-sm lg:grid-cols-4 gap-4'>
				<a href='https://help.netflix.com/en/node/412'>FAQ</a>
				<a href='https://help.netflix.com/en/'>Help Center</a>
				<a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>
				<a href='https://help.netflix.com/legal/privacy'>Privacy</a>
				<a href='https://www.netflix.com/vn-en/#'>Cookie Preferences</a>
				<a href='https://help.netflix.com/legal/corpinfo'>
					Corporate Information
				</a>
			</div>
			<div className='w-32 mt-6 flex relative bg-white border border-neutral-400 px-2 py-3'>
				<img
					src='/icons/language_black.svg'
					alt='language'
					width={16}
					className='absolute top-0 bottom-0 h-full fill-black'
				/>

				<select className='bg-transparent text-neutral-700 pl-5 text-sm'>
					<option value='en' className='bg-white text-neutral-400 pl-5 text-sm'>
						English
					</option>
					<option value='vn' className='bg-white text-neutral-400 pl-5 text-sm'>
						Tiếng Việt
					</option>
				</select>
			</div>
		</div>
	);
};

export default Footer;
