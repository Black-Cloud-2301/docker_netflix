import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/HomePage';
import SignUp from './pages/SignUp';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='signUp' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
