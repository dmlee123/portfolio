import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';

function Home() {
	return (
		<div>
			<div>
				<Typewriter
					options={{loop: true, }}
					onInit={(typewriter) => {
						typewriter
							.typeString('Hello!')
							.pauseFor(2200)
							.deleteAll(300)
							.pauseFor(500)
							.typeString('Welcime')
							.pauseFor(100)
							.deleteChars(5)
							.typeString('lcome!')
							.pauseFor(2200)
							.deleteAll(150)
							.start();
					}}
				/>
				<h3>Daniel Lee Software Developer </h3>
			</div>
		</div>
	);
}

export default Home;
