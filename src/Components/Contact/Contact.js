import React from 'react';
import NavBar from '../NavBar/NavBar';
import './contact.css';

function Contact() {
	return (
		<>
			<NavBar />
			<div>
				<h3>Contact</h3>
				<p>
					Feel free to contact me. We can talk about work or
					just chat because I am open to anything. I will reply back as soon as
					possible.
				</p> <br />
				<p>
					
					<ion-icon id = "mail" name='mail-open-outline'></ion-icon>danielmlee92@yahoo.com
				</p>
				<a href='https://github.com/dmlee123'>
					<ion-icon name='logo-github'></ion-icon>
				</a>
				<a href='https://www.linkedin.com/in/daniel-m-lee-j062192/'>
					<ion-icon name='logo-linkedin'></ion-icon>
				</a>
			</div>
		</>
	);
}

export default Contact;
