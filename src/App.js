import './App.css';
import Navigate from './Components/Navigate/Navigate';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
	return <div className='App'>
      <div>
        <h1> Hello!</h1>
        <h3>Daniel Lee  Software Developer </h3>
      </div>
    <Navigate />
    </div>;
}

export default App;
