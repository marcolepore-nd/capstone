import React from "react";
import Button from "components/Button/Button";
import Centerer from "components/Centerer/Centerer";
import heroImage from "assets/restaurant_chef.jpg";
import { useMobileDetect } from "MoblieListener";
import "./Hero.scss";

const Hero = () => {
	const { isMobile } = useMobileDetect();

	return (
		<>
			<section className="hero_container">
				<Centerer
					column={isMobile}
				>
					<div className="hero_content">
						<div>
							<h1>Little Lemon</h1>
							<h2>Chicago</h2>
							<p>
								Brighten your day with Chicago's best bites at Little Lemon.
								<br />
								Reserve a table today and taste the difference!
							</p>
						</div>
						<Button
							secondary
							label="Reserve a table"
							onClick={() => alert("You clicked the button!")}
							aria-label="Reserve a table button"
						/>
					</div>
					<div className="hero_image">
						<img src={heroImage} alt="Restaurant" aria-label="Restaurant Image" />
					</div>
				</Centerer>
			</section>
		</>
	);
};

export default Hero;
