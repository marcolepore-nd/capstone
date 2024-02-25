import React from 'react';
import Nav from 'components/Nav/Nav';
import logo from "assets/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <Nav />
    </header>
  );
}

export default Header;
