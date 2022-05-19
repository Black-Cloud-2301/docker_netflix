import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../components/store/AuthContext';
import Footer from '../SignIn/Footer';
import MainBody from './MainBody';

const ForgotEmail = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthContext();

	useEffect(() => {
		if (isAuthenticated) navigate('/browse');
	}, [isAuthenticated, navigate]);

	return (
		<>
			<MainBody />
			<Footer />
		</>
	);
};

export default ForgotEmail;
