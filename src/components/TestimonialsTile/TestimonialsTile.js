import React from 'react';
import './TestimonialsTile.scss';

const TestimonialsTile = ({ picture, name, sentence }) => {
  return (
    <div className="testimonialsTile_container">
      <img src={picture} alt={name} className="testimonialsTile_picture" />
      <div className="testimonialsTile_content">
        <p className="testimonialsTile_sentence">{sentence}</p>
        <p className="testimonialsTile_name">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialsTile;
