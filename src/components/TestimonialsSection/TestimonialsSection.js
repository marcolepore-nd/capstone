import React from "react";
import Centerer from "components/Centerer/Centerer";
import TestimonialsTile from "components/TestimonialsTile/TestimonialsTile";
import tes1 from "assets/tes1.jpg";
import tes2 from "assets/tes2.jpg";
import tes3 from "assets/tes3.jpg";
import tes4 from "assets/tes4.jpg";
import "./TestimonialsSection.scss";

const testimonials = [
	{
		name: "Mary",
		sentence: '"My favourite place in town."',
		picture: tes1,
	},
	{
		name: "Johnny",
		sentence: '"The best salad I have ever had."',
		picture: tes2,
	},
	{
		name: "Clint",
		sentence: '"The lemon dessert is to die for."',
		picture: tes3,
	},
	{
		name: "Eva",
		sentence: '"I love the bruschetta."',
		picture: tes4,
	},
];

const TestimonialsSection = () => {
	return (
		<section className="testimonialsSection_container" aria-label="Testimonials Section">
			<Centerer>
				<div className="testimonialsSection_content">
					<h3>Testimonials</h3>
					<div className="testimonialsSection_tiles">
						{testimonials.map((tes, index) => (
							<TestimonialsTile
								key={index}
								name={tes.name}
								sentence={tes.sentence}
								price={tes.price}
								picture={tes.picture}
								aria-label={`Testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</Centerer>
		</section>
	);
};

export default TestimonialsSection;
