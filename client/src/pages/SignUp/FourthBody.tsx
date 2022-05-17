import React from 'react';
import { SelectedState } from '.';

type Props = {
	setNextPage: (val: number) => void;
	selected: SelectedState;
	setSelected: (val: SelectedState) => void;
};

const FourthBody: React.FC<Props> = ({
	setNextPage,
	selected,
	setSelected,
}) => {
	const styleChosen = {
		first: {
			active:
				'relative bg-red-600 text-white aspect-square text-sm font-semibold rounded-sm flex justify-center items-center after:absolute after:h-10 after:w-10 after:rotate-45 after:-bottom-3 after:left-0 after:right-0 after:mx-auto after:bg-red-600 after:-z-10',
			notActive:
				'relative bg-red-400 text-white aspect-square text-sm font-semibold rounded-sm flex justify-center items-center',
		},
		second: {
			active: 'text-center font-semibold text-red-600',
			notActive: 'text-center font-semibold text-neutral-500',
		},
		third: {
			active: 'text-center text-sm font-semibold text-red-600',
			notActive: 'text-center text-sm font-semibold text-neutral-500',
		},
		fourth: {
			active: 'text-center text-sm font-semibold text-red-600',
			notActive: 'text-center text-sm font-semibold text-neutral-500',
		},
		fifth: {
			active: 'text-center text-sm font-semibold text-red-600',
			notActive: 'text-center text-sm font-semibold text-neutral-500',
		},
	};

	return (
		<div className='max-w-4xl mt-8 px-8 mx-auto'>
			<p className='text-sm'>
				STEP <b>2</b> OF <b>3</b>
			</p>
			<h3 className='text-3xl font-bold'>
				Choose the plan that's right for you
			</h3>
			<ul className='my-4'>
				<li className='flex my-1'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-left text-lg'>
						Watch all you want. ad-free.
					</span>
				</li>
				<li className='flex my-1'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-left text-lg'>
						Recommendations just for you.
					</span>
				</li>
				<li className='flex my-1'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						className='mt-1'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z'
							fill='#e50914'
						></path>
					</svg>
					<span className='ml-2 text-left text-lg'>
						Change or cancel you plan anytime.
					</span>
				</li>
			</ul>
			<div className='flex flex-col sm:flex-row mb-5 sticky top-0'>
				<div className='w-4/12' />
				<ul className='grid grid-cols-4 gap-2 mb-10 flex-1'>
					<li
						className={
							selected === 'mobile'
								? styleChosen.first.active
								: styleChosen.first.notActive
						}
						onClick={() => setSelected('mobile')}
					>
						Mobile
					</li>
					<li
						className={
							selected === 'basic'
								? styleChosen.first.active
								: styleChosen.first.notActive
						}
						onClick={() => setSelected('basic')}
					>
						Basic
					</li>
					<li
						className={
							selected === 'standard'
								? styleChosen.first.active
								: styleChosen.first.notActive
						}
						onClick={() => setSelected('standard')}
					>
						Standard
					</li>
					<li
						className={
							selected === 'premium'
								? styleChosen.first.active
								: styleChosen.first.notActive
						}
						onClick={() => setSelected('premium')}
					>
						Premium
					</li>
				</ul>
			</div>
			<div className='flex flex-col sm:flex-row border-b mb-5'>
				<p className='text-center text-sm mb-5 sm:w-4/12 sm:text-left sm:pl-6 sm:text-base'>
					Monthly price
				</p>
				<ul className='grid grid-cols-4 gap-2 flex-1 mb-5 text-sm sm:text-base'>
					<li
						className={
							selected === 'mobile'
								? styleChosen.second.active
								: styleChosen.second.notActive
						}
						onClick={() => setSelected('mobile')}
					>
						70,000 <u>đ</u>
					</li>
					<li
						className={
							selected === 'basic'
								? styleChosen.second.active
								: styleChosen.second.notActive
						}
						onClick={() => setSelected('basic')}
					>
						180,000 <u>đ</u>
					</li>
					<li
						className={
							selected === 'standard'
								? styleChosen.second.active
								: styleChosen.second.notActive
						}
						onClick={() => setSelected('standard')}
					>
						220,000 <u>đ</u>
					</li>
					<li
						className={
							selected === 'premium'
								? styleChosen.second.active
								: styleChosen.second.notActive
						}
						onClick={() => setSelected('premium')}
					>
						260,000 <u>đ</u>
					</li>
				</ul>
			</div>
			<div className='flex flex-col sm:flex-row border-b mb-5'>
				<p className='text-center text-sm mb-5 sm:w-4/12 sm:text-left sm:pl-6 sm:text-base'>
					Video quality
				</p>
				<ul className='grid grid-cols-4 gap-2 flex-1 mb-5 text-sm sm:text-base'>
					<li
						className={
							selected === 'mobile'
								? styleChosen.third.active
								: styleChosen.third.notActive
						}
						onClick={() => setSelected('mobile')}
					>
						Good
					</li>
					<li
						className={
							selected === 'basic'
								? styleChosen.third.active
								: styleChosen.third.notActive
						}
						onClick={() => setSelected('basic')}
					>
						Good
					</li>
					<li
						className={
							selected === 'standard'
								? styleChosen.third.active
								: styleChosen.third.notActive
						}
						onClick={() => setSelected('standard')}
					>
						Better
					</li>
					<li
						className={
							selected === 'premium'
								? styleChosen.third.active
								: styleChosen.third.notActive
						}
						onClick={() => setSelected('premium')}
					>
						Best
					</li>
				</ul>
			</div>
			<div className='flex flex-col sm:flex-row border-b mb-5'>
				<p className='text-center text-sm mb-5 sm:w-4/12 sm:text-left sm:pl-6 sm:text-base'>
					Resolution
				</p>
				<ul className='grid grid-cols-4 gap-2 flex-1 mb-5 text-sm sm:text-base'>
					<li
						className={
							selected === 'mobile'
								? styleChosen.fourth.active
								: styleChosen.fourth.notActive
						}
						onClick={() => setSelected('mobile')}
					>
						480p
					</li>
					<li
						className={
							selected === 'basic'
								? styleChosen.fourth.active
								: styleChosen.fourth.notActive
						}
						onClick={() => setSelected('basic')}
					>
						480p
					</li>
					<li
						className={
							selected === 'standard'
								? styleChosen.fourth.active
								: styleChosen.fourth.notActive
						}
						onClick={() => setSelected('standard')}
					>
						1080p
					</li>
					<li
						className={
							selected === 'premium'
								? styleChosen.fourth.active
								: styleChosen.fourth.notActive
						}
						onClick={() => setSelected('premium')}
					>
						4k+HDR
					</li>
				</ul>
			</div>
			<div className='flex flex-col sm:flex-row border-b mb-5'>
				<p className='text-center text-sm mb-5 sm:w-4/12 sm:text-left sm:pl-6 sm:text-base'>
					Devices you can use to watch
				</p>
				<ul className='grid grid-cols-4 gap-2 flex-1 mb-5 text-sm sm:text-base'>
					<li
						className={
							selected === 'mobile'
								? styleChosen.fifth.active
								: styleChosen.fifth.notActive
						}
						onClick={() => setSelected('mobile')}
					>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Phone</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto -rotate-90'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Tablet</p>
						</div>
					</li>
					<li
						className={
							selected === 'basic'
								? styleChosen.fifth.active
								: styleChosen.fifth.notActive
						}
						onClick={() => setSelected('basic')}
					>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Phone</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto -rotate-90'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Tablet</p>
						</div>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Computer</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z'
									fill='currentColor'
								></path>
							</svg>
							<p>TV</p>
						</div>
					</li>
					<li
						className={
							selected === 'standard'
								? styleChosen.fifth.active
								: styleChosen.fifth.notActive
						}
						onClick={() => setSelected('standard')}
					>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Phone</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto -rotate-90'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Tablet</p>
						</div>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Computer</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z'
									fill='currentColor'
								></path>
							</svg>
							<p>TV</p>
						</div>
					</li>
					<li
						className={
							selected === 'premium'
								? styleChosen.fifth.active
								: styleChosen.fifth.notActive
						}
						onClick={() => setSelected('premium')}
					>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Phone</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto -rotate-90'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Tablet</p>
						</div>
						<div className='mb-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2 3C0.895431 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H22C23.1046 16 24 15.1046 24 14V5C24 3.89543 23.1046 3 22 3H2ZM2 5L22 5V14H2V5ZM2.1072 20.5232C5.27786 20.1813 8.59078 20 12 20C15.4092 20 18.7221 20.1813 21.8928 20.5232L22.1072 18.5347C18.8643 18.1851 15.4798 18 12 18C8.52024 18 5.13573 18.1851 1.8928 18.5347L2.1072 20.5232Z'
									fill='currentColor'
								></path>
							</svg>
							<p>Computer</p>
						</div>
						<div className='mb-4'>
							<svg
								width='28'
								height='28'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								focusable='false'
								className='mx-auto'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z'
									fill='currentColor'
								></path>
							</svg>
							<p>TV</p>
						</div>
					</li>
				</ul>
			</div>
			<p className='text-sm text-neutral-600'>
				HD (720p), Full HD (1080p), Ultra HD (4k) and HDR availability subject
				to your internet service and device capabilities. Not all content is
				available in all resolutions. See our{' '}
				<a
					href='https://help.netflix.com/legal/termsofuse'
					className='text-blue-500'
				>
					Terms of Use
				</a>{' '}
				for more details.
			</p>
			<p className='text-sm mt-3 text-neutral-600'>
				Only people who live with you may use your account. Watch on 4 different
				devices at the same time with Premium, 2 with Standard, and 1 with Basic
				and Mobile.
			</p>
			<div className='flex justify-center items-center'>
				<button
					className='w-full max-w-md text-white bg-primary rounded mt-6 mb-40 py-3 text-3xl hover:bg-red-500'
					onClick={() => setNextPage(4)}
				>
					Next
				</button>
			</div>
		</div>
	);
};
export default FourthBody;
