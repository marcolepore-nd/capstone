import React from 'react';
import Button from 'components/Button/Button';
import Centerer from 'components/Centerer/Centerer';
import heroImage from 'assets/restaurant_chef.jpg';
import './Hero.scss';

const Hero = () => {
	return (
		<>
			<div className='hero_container'>
				<Centerer>
					<div className='hero_content'>
						<div>
							<h1>Little Lemon</h1>
							<h2>Chicago</h2>
							<p>
								Brighten your day with Chicago's best bites at Little Lemon.
								<br />
								Reserve a table today and taste the difference!
							</p>
						</div>
						<Button secondary label='Reserve a table' onClick={() => alert('You clicked the button!')} />
					</div>
					<div className='hero_image'>
						<img src={heroImage} alt='Restaurant Image' />
					</div>
				</Centerer>
			</div>
		</>
	);
};

export default Hero;