import React from 'react';
import './navigate.css';
import { Link } from 'react-router-dom';

function Navigate() {
	return (
		<div>
			<Link id='navigate' to='/work'>
				<button id='button'>Work</button>
			</Link>{' '}
			&nbsp;
			<Link id='navigate' to='/about'>
				<button id='button'>About</button>
			</Link>
			&nbsp;
			<Link id='navigate' to='/contact'>
				<button id='button'>Contact</button>
			</Link>
			&nbsp;
		</div>
	);
}

export default Navigate;
