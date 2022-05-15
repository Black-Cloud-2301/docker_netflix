import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Home from './pages/HomePage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
