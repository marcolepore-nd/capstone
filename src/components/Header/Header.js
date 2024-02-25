import React from 'react';
import Centerer from 'components/Centerer/Centerer';
import Nav from 'components/Nav/Nav';
import logo from "assets/Logo.svg";
import './Header.scss';

function Header() {
  return (
    <Centerer>
      <header className='header_container'>
        <img className='header_logo' src={logo} alt="Logo" />
        <Nav />
      </header>
    </Centerer>
  );
}

export default Header;
