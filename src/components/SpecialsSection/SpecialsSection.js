import React from "react";
import Centerer from "components/Centerer/Centerer";
import SpecialsTile from "components/SpecialsTile/SpecialsTile";
import greekSalad from "assets/greek_salad.jpg";
import bruschetta from "assets/bruschetta.svg";
import lemonDessert from "assets/lemon_dessert.jpg";
import "./SpecialsSection.scss";

const specials = [
	{
		title: "Greek Salad",
		text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: "$12.99",
		image: greekSalad,
	},
	{
		title: "Bruschetta",
		text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: "$5.99",
		image: bruschetta,
	},
	{
		title: "Lemon Dessert",
		text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: "$5.00",
		image: lemonDessert,
	},
];

const SpecialsSection = () => {
	return (
		<div className="specialsSection_container">
			<Centerer>
				<div className="specialsSection_content">
					<h3>Specials</h3>
					<div className="specialsSection_tiles">
						{specials.map((special, index) => (
							<SpecialsTile
								key={index}
								title={special.title}
								text={special.text}
								price={special.price}
								image={special.image}
								aria-label={special.title}
								role="article"
							/>
						))}
					</div>
				</div>
			</Centerer>
		</div>
	);
};

export default SpecialsSection;
