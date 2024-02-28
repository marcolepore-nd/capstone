import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Hero from 'components/Hero/Hero';
import SpecialsSection from 'components/SpecialsSection/SpecialsSection';
import TestimonialsSection from 'components/TestimonialsSection/TestimonialsSection';
import AboutSection from 'components/AboutSection/AboutSection';

const Homepage = () => {
  return (
    <>
			<Header/>
			<main>
				<Hero/>
				<SpecialsSection/>
				<TestimonialsSection/>
				<AboutSection/>
			</main>
			<Footer/>
    </>
  );
};

export default Homepage;
