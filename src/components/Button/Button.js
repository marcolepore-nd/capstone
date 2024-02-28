import React from 'react';
import './Button.scss';

const Button = ({ label, onClick, secondary }) => {
  return (
    <button className={`button ${!!secondary ? 'secondary' : ''}`} onClick={!!onClick ? onClick : null}>
      {label}
    </button>
  );
};

export default Button;
