import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../components/store/AuthContext';
import { useLogoutMutation } from '../../graphql/generated/graphql';
import NotChooseProfile from './NotChooseProfile';
import JWTManager from '../../utils/jwt';
const Browse = () => {
	const navigate = useNavigate();
	const { isAuthenticated, logoutClient } = useAuthContext();
	const [logoutServer] = useLogoutMutation();

	const logout = async () => {
		logoutClient();
		await logoutServer({
			variables: { userId: JWTManager.getUserId()?.toString() as string },
		});
	};

	useEffect(() => {
		if (!isAuthenticated) navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return (
		<div>
			<NotChooseProfile />
			<button className='p-4 bg-gray-500' onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default Browse;
