import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div class = "bar">
			<Link to='/'>
				<button id='home'>Home</button>
			</Link>
		</div>
	);
}

export default NavBar;
