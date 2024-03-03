import React from 'react';
import './TestimonialsTile.scss';

const TestimonialsTile = ({ picture, name, sentence }) => {
  return (
    <div className="testimonialsTile_container">
      <img src={picture} alt={name} className="testimonialsTile_picture" />
      <div className="testimonialsTile_content">
        <p className="testimonialsTile_sentence" aria-label="Testimonial Sentence">{sentence}</p>
        <p className="testimonialsTile_name" aria-label="Testimonial Name">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialsTile;
