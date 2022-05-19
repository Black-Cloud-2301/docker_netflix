import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './components/store/AuthContext';
import Browse from './pages/Browse';
import ForgotEmail from './pages/ForgotEmail';
import Home from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './style.css';

function App() {
	const [loading, setLoading] = useState(true);

	const { checkAuth } = useAuthContext();

	useEffect(() => {
		const authenticate = async () => {
			await checkAuth();
			setLoading(false);
		};
		authenticate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div className='w-screen h-screen bg-black'></div>;

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='signUp' element={<SignUp />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='forgotEmail' element={<ForgotEmail />} />
					<Route path='browse' element={<Browse />} />
				</Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
