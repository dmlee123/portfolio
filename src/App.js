import './App.css';
import Navigate from './Components/Navigate/Navigate';
import { Link, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Work from './Components/Work/Work';
import Home from './Components/Home/Home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/work' element={<Work />} />
			</Routes>
			<Navigate />
		</div>
	);
}

export default App;
