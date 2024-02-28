import React from "react";
import Centerer from "components/Centerer/Centerer";
import Nav from "components/Nav/Nav";
import logo from "assets/Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header_container">
      <Centerer>
        <img className="header_logo" src={logo} alt="Logo" />
        <Nav />
      </Centerer>
    </header>
  );
}

export default Header;
