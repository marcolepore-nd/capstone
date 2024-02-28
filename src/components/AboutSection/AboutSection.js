import React from 'react';
import Centerer from 'components/Centerer/Centerer';
import img1 from 'assets/restaurantfood.jpg';
import img2 from 'assets/restaurant.jpg';
import './AboutSection.scss';

const AboutSection = () => {
	return (
		<div className='aboutSection_container'>
			<Centerer>
				<div className='aboutSection_content'>
					<h3>About</h3>
					<div className='aboutSection_wrapper'>
						<div className='aboutSection_tile'>
							<p>Little Lemon is a small restaurant in the heart of Chicago.</p>
							<p>We are known for our Chicago style feta cheese and our authentic cuisine.</p>
							<p>We have been serving the people of Chicago for over 20 years and we are proud to be a part of the local community.</p>
						</div>
						<div className='aboutSection_images'>
							<div className='aboutSection_imageContainer'>
								<img src={img1} alt='Restaurant Image' />
							</div>
							<div className='aboutSection_imageContainer'>
								<img src={img2} alt='Restaurant Image' />
							</div>
						</div>
					</div>
				</div>
			</Centerer>
		</div>
	);
};

export default AboutSection;
