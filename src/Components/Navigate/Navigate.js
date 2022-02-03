import React from 'react';
import './navigate.css';
import { Link } from 'react-router-dom';

function Navigate() {
	return (
		<div>
			<Link to='/work'>
				<button id='button'>Work</button>
			</Link>
			<Link to='/about'>
				<button id='button'>About</button>
			</Link>
			<Link to='/contact'>
				<button id='button'>Contact</button>
			</Link>
		</div>
	);
}

export default Navigate;
