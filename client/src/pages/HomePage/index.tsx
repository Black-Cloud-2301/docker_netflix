import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../components/store/AuthContext';
import EighthItem from './EighthItem';
import FifthItem from './FifthItem';
import FirstItems from './FirstItem';
import FourthItem from './FourthItem';
import SecondItem from './SecondItem';
import SeventhItem from './SeventhItem';
import SixthItem from './SixthItem';
import ThirdItem from './ThirdItem';

const Home = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthContext();

	useEffect(() => {
		if (isAuthenticated) navigate('/browse');
	}, [isAuthenticated, navigate]);

	return (
		<main className='bg-black'>
			<FirstItems />
			<SecondItem />
			<ThirdItem />
			<FourthItem />
			<FifthItem />
			<SixthItem />
			<SeventhItem />
			<EighthItem />
		</main>
	);
};

export default Home;
