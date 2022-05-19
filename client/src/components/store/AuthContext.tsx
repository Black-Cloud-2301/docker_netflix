import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import JWTManager from '../../utils/jwt';

interface IAuthContext {
	isAuthenticated: boolean;
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
	checkAuth: () => Promise<void>;
	logoutClient: () => void;
}

const AuthContext = createContext<IAuthContext>({
	isAuthenticated: false,
	setIsAuthenticated: () => {},
	checkAuth: () => Promise.resolve(),
	logoutClient: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuth = async () => {
		const token = JWTManager.getToken();

		if (token) setIsAuthenticated(true);
		else {
			const success = await JWTManager.getRefreshToken();
			if (success) setIsAuthenticated(true);
		}
	};

	const logoutClient = () => {
		JWTManager.deleteToken();
		setIsAuthenticated(false);
	};

	const authContextData = {
		isAuthenticated,
		setIsAuthenticated,
		checkAuth,
		logoutClient,
	};
	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
