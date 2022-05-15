import FrequentlyQuestions, {
	QuestionProps,
} from '../components/FrequentlyQuestions';
import { HomeQuestion } from '../data/homeData';

const Home = () => {
	return (
		<main className='bg-black'>
			<section className='relative border-b-8 border-neutral-800'>
				<img
					src='/images/home-bg.jpg'
					alt='home'
					className='min-h-[400px] object-cover'
				/>
				<div className='absolute top-0 w-full h-full bg-gradient-to-b from-black_opa_90 via-black_opa_40 to-black_opa_90'>
					<header className='flex justify-between px-12 py-8'>
						<img src='/images/netflix.png' alt='logo' width='134px' />
						<div className='w-60 flex justify-between'>
							<div className='flex relative bg-black text-white border border-white px-1'>
								<img
									src='/icons/language.svg'
									alt='language'
									width={20}
									className='absolute top-0 bottom-0 h-full'
								/>
								<select className='bg-transparent text-white pl-5'>
									<option value='en' className='bg-white text-black pl-5'>
										English
									</option>
									<option value='vn' className='bg-white text-black pl-5'>
										Tiếng Việt
									</option>
								</select>
							</div>
							<button className='text-white bg-primary hover:opacity-80 rounded px-4 py-1'>
								Sign In
							</button>
						</div>
					</header>
					<div className='text-white flex flex-col justify-center items-center h-4/6 w-6/12 mx-auto'>
						<h3 className='text-5xl font-bold text-center'>
							Unlimited movies, TV shows, and more.
						</h3>
						<h4 className='text-2xl font-semibold my-8'>
							Watch anywhere. Cancel anytime.
						</h4>
						<h5 className='text-lg'>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h5>
						<div className='mt-6 relative w-full h-16'>
							<input
								type='text'
								id='emailInput'
								className='w-full h-16 pl-4 text-black form__item--input'
								required
							/>
							<label
								htmlFor='emailInput'
								className='absolute text-neutral-500 form__item--label'
							>
								Email address
							</label>
							<button
								type='submit'
								className='absolute right-0 top-0 text-white bg-primary h-full w-60 text-3xl font-semibold flex justify-center items-center'
							>
								<p className='mb-1'>Get Started</p>
								<img
									src='/icons/arrow_forward.svg'
									alt='arrow_forward'
									className='ml-4'
								/>
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className='flex px-16 gap-x-10 border-b-8 border-neutral-800'>
				<article className='w-6/12 px-6'>
					<div className='text-white flex flex-col justify-center h-full'>
						<h4 className='text-5xl font-bold'>Enjoy on your TV.</h4>
						<p className='text-2xl mt-5'>
							Watch on SmartTVs, Playstation, Xbox, Chromecast, Apple TV,
							Blu-ray players, and more.
						</p>
					</div>
				</article>
				<img src='/images/tv.png' alt='tv' className='object-cover w-6/12' />
			</section>
			<section className='flex px-16 gap-x-10 border-b-8 border-neutral-800'>
				<article className='relative w-6/12'>
					<img
						src='/images/mobile-0819.jpg'
						alt='mobile-0819'
						className='object-cover w-full'
					/>
					<div className='flex border-2 border-neutral-600 rounded-2xl p-2 w-7/12 items-center justify-between bg-black absolute bottom-6 left-0 right-0 mx-auto'>
						<img
							src='/images/boxshot.png'
							alt='boxshot'
							width={50}
							className='object-cover'
						/>
						<p className='text-white ml-4'>Downloading...</p>
						<img
							src='/icons/download-icon.gif'
							alt='download-icon'
							width={50}
						/>
					</div>
				</article>
				<article className='w-6/12 px-6'>
					<div className='text-white flex flex-col justify-center h-full'>
						<h4 className='text-5xl font-bold'>
							Download your shows to watch offline.
						</h4>
						<p className='text-2xl mt-5'>
							Save your favorites easily and always have something to watch.
						</p>
					</div>
				</article>
			</section>
			<section className='text-white py-16 px-20 border-b-8 border-neutral-800'>
				<div className='w-6/12'>
					<h4 className='text-5xl font-bold'>Watch everywhere.</h4>
					<p className='text-2xl mt-8'>
						Stream unlimited movies and TV shows on your phone, tablet, laptop,
						and TV.
					</p>
				</div>
			</section>
			<section className='flex px-20 py-16 border-b-8 border-neutral-800 gap-5'>
				<article className='w-6/12'>
					<img src='/images/kidsValueProp.png' alt='kidsValueProp' />
				</article>
				<article className='w-6/12 text-white flex flex-col justify-center items-center'>
					<h4 className='text-5xl font-bold'>Create profiles for kids.</h4>
					<p className='text-2xl mt-8'>
						Send kids on adventures with their favorite characters in a space
						made just for them -- free with your membership
					</p>
				</article>
			</section>
			<section className='flex px-20 py-16 border-b-8 border-neutral-800 gap-5'>
				<article className='w-6/12 text-white flex flex-col justify-center'>
					<h4 className='text-5xl font-bold'>
						Have an Android Phone? Get our new free plan!
					</h4>
					<p className='text-2xl mt-8'>
						Watch a selection of new movies and TV shows without adding any
						payment details!
					</p>
					<div className='flex mt-4'>
						<p className='text-2xl'>Get the app</p>
						<img
							src='/icons/arrow_forward.svg'
							alt='arrow_forward'
							className='ml-4 mt-1'
						/>
					</div>
				</article>
				<article className='w-6/12'>
					<img src='/images/vn.jpg' alt='vn' />
				</article>
			</section>
			<section className='p-20'>
				<h3 className='text-white text-5xl text-center mb-8'>
					Frequently Asked Questions
				</h3>
				{HomeQuestion.map((item: QuestionProps) => {
					return <FrequentlyQuestions {...item} />;
				})}
			</section>
		</main>
	);
};

export default Home;
