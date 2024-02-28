import React from 'react';
import './SpecialsTile.scss';

const SpecialsTile = ({ title, text, price, image }) => {
  return (
    <div className="specialsTile_container">
      <img src={image} alt={title} className="specialsTile_image" />
      <div className='specialsTile_content'>
        <div className='specialsTile_title'>
					<h4>{title}</h4>
					<p className="specialsTile_price">{price}</p>
        </div>
        <p className="specialsTile_text">{text}</p>
				<a href="#" className="specialsTile_link">Order a delivery</a>
      </div>
    </div>
  );
};

export default SpecialsTile;
