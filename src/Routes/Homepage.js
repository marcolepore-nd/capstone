import React from "react";
import Main from "components/Main/Main";
import Hero from "components/Hero/Hero";
import SpecialsSection from "components/SpecialsSection/SpecialsSection";
import TestimonialsSection from "components/TestimonialsSection/TestimonialsSection";
import AboutSection from "components/AboutSection/AboutSection";

const Homepage = () => {
  return (
    <Main>
      <Hero />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </Main>
  );
};

export default Homepage;
