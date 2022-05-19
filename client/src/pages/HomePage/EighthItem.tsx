const EighthItem = () => {
	return (
		<footer>
			<div className='w-9/12 2xl:w-7/12 mx-auto text-neutral-400'>
				<div className='py-8'>
					<a href='https://help.netflix.com/en/contactus'>
						Questions? Contact us.
					</a>
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 text-sm sm:text-xs 2xl:text-sm lg:grid-cols-4 gap-4'>
					<a href='https://help.netflix.com/en/node/412'>FAQ</a>
					<a href='https://help.netflix.com/en/'>Help Center</a>
					<a href='https://www.netflix.com/vn-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>
						Account
					</a>
					<a href='https://media.netflix.com/en/'>Media Center</a>
					<a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>
						Investor Relations
					</a>
					<a href='https://jobs.netflix.com/'>Jobs</a>
					<a href='https://devices.netflix.com/en/'>Ways to Watch</a>
					<a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>
					<a href='https://help.netflix.com/legal/privacy'>Privacy</a>
					<a href='https://www.netflix.com/vn-en/#'>Cookie Preferences</a>
					<a href='https://help.netflix.com/legal/corpinfo'>
						Corporate Information
					</a>
					<a href='https://help.netflix.com/en/contactus'>Contact Us</a>
					<a href='https://fast.com/'>Speed Test</a>
					<a href='https://help.netflix.com/legal/notices'>Legal Notices</a>
					<a href='https://www.netflix.com/vn-en/browse/genre/839338'>
						Only on Netflix
					</a>
				</div>
				<div className='w-32 mt-6 flex relative bg-black  border border-neutral-400 px-2 py-4'>
					<img
						src='/icons/language.svg'
						alt='language'
						width={16}
						className='absolute top-0 bottom-0 h-full'
					/>

					<select className='bg-transparent text-white pl-5 text-sm'>
						<option
							value='en'
							className='bg-white text-neutral-400 pl-5 text-sm'
						>
							English
						</option>
						<option
							value='vn'
							className='bg-white text-neutral-400 pl-5 text-sm'
						>
							Tiếng Việt
						</option>
					</select>
				</div>
				<p className='py-4 text-neutral-400 text-sm sm:text-xs 2xl:text-sm'>
					Netflix Vietnam
				</p>
			</div>
		</footer>
	);
};

export default EighthItem;
