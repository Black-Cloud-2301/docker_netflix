import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='h-12 sm:h-[74px] lg:h-24 flex justify-between items-center border-b px-3 lg:px-6'>
			<Link to={'/'}>
				<img
					src='/images/netflix.png'
					alt='netflix'
					className='h-5 sm:h-10 lg:h-12 object-cover'
				/>
			</Link>
			<Link
				to={'#'}
				className='text-gray-700 sm:text-lg lg:text-xl font-semibold sm:font-bold'
			>
				Sign In
			</Link>
		</div>
	);
};

export default Header;
