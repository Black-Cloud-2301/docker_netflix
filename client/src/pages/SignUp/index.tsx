import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../components/store/AuthContext';
import { SignUpContext } from '../../components/store/SIgnUpContext';
import FifthBody from './FifthBody';
import FirstBody from './FirstBody';
import Footer from './Footer';
import FourthBody from './FourthBody';
import Header from './Header';
import SecondBody from './SecondBody';
import SixthBody from './SixthBody';
import ThirdBody from './ThirdBody';

export type SelectedState = 'premium' | 'standard' | 'basic' | 'mobile';

const SignUp = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthContext();
	const [nextPage, setNextPage] = useState<number>(0);
	const { signUpInfo } = useContext(SignUpContext);
	const [selected, setSelected] = useState<SelectedState>('premium');

	useEffect(() => {
		if (isAuthenticated) navigate('/browse');
	}, [isAuthenticated, navigate]);

	useEffect(() => {
		if (!signUpInfo.email.includes('.') || !signUpInfo.email.includes('@'))
			navigate('/');
		console.log('SignUp page active useEffect');
	}, [navigate, signUpInfo.email]);

	return (
		<div>
			<Header />
			{nextPage === 0 && <FirstBody setNextPage={setNextPage} />}
			{nextPage === 1 && <SecondBody setNextPage={setNextPage} />}
			{nextPage === 2 && <ThirdBody setNextPage={setNextPage} />}
			{nextPage === 3 && (
				<FourthBody
					setNextPage={setNextPage}
					selected={selected}
					setSelected={setSelected}
				/>
			)}
			{nextPage === 4 && <FifthBody setNextPage={setNextPage} />}
			{nextPage === 5 && (
				<SixthBody setNextPage={setNextPage} selected={selected} />
			)}
			<Footer />
		</div>
	);
};

export default SignUp;
