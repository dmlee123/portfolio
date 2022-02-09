import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Carousel } from 'react-bootstrap';
import './work.css';

function Work() {
	return (
		<>
			<NavBar />
			<Carousel id='carousel' fade='true' interval='4000'>
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
							<button id='enter'>Enter </button>
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
							<button id='enter'>Enter </button>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						width='200'
						height='500'
						className='d-block w-100'
						src='https://res.cloudinary.com/db4dpaaue/image/upload/v1644379154/Screen_Shot_2022-02-08_at_7.58.23_PM_gzmau8.png'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3 style={{ color: 'black' }}>Currency Exchange Rate</h3>
						<a href='https://dmlee123.github.io/currency-exchange/'>
							<button id='enter'>Enter </button>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default Work;
