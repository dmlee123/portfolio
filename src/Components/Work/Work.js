import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Carousel } from 'react-bootstrap';
import './work.css';

function Work() {
	return (
		<>
			<NavBar />
			<Carousel id ="carousel" fade='true' interval='4000'>
				<Carousel.Item>
					<img
						width='-200'
						height='500'
						className='d-block w-100'
						src='https://res.cloudinary.com/db4dpaaue/image/upload/v1643936162/Screen_Shot_2022-02-03_at_4.54.46_PM_wpkdfb.png'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3 style={{ color: 'black' }}>Travelgram</h3>
						<a href='https://dmlee123.github.io/travelgram-frontend/'>
							<button id = "enter">Enter </button>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						width='200'
						height='500'
						className='d-block w-100'
						src='https://res.cloudinary.com/db4dpaaue/image/upload/v1643936162/Screen_Shot_2022-02-03_at_4.53.59_PM_ezwruc.png'
						alt='Second slide'
					/>

					<Carousel.Caption>
						<h3 style={{ color: 'white' }}>Sports Odds Calculator</h3>
						<a href='https://dmlee123.github.io/frontend-project4/'>
							<button id = "enter">Enter </button>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				{/* <Carousel.Item>
					<img
						width='300'
						height='300'
						className='d-block w-100'
						src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item> */}
			</Carousel>
		</>
	);
}

export default Work;
