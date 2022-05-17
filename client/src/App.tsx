import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotEmail from './pages/ForgotEmail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='signUp' element={<SignUp />} />
				<Route path='signIn' element={<SignIn />} />
				<Route path='forgotEmail' element={<ForgotEmail />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
