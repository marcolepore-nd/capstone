import React from "react";
import Hero from "components/Hero/Hero";
import SpecialsSection from "components/SpecialsSection/SpecialsSection";
import TestimonialsSection from "components/TestimonialsSection/TestimonialsSection";
import AboutSection from "components/AboutSection/AboutSection";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
};

export default Homepage;
