import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='h-12 sm:h-[74px] lg:h-24 flex justify-between items-center px-3 lg:px-6'>
			<Link to={'/'}>
				<img
					src='/images/netflix.png'
					alt='netflix'
					className='h-5 sm:h-10 lg:h-12 object-cover'
				/>
			</Link>
			<Link
				to={'/signIn'}
				className='sm:text-lg lg:text-xl font-semibold sm:font-bold text-red-600'
			>
				Sign In
			</Link>
		</div>
	);
};

export default Header;
