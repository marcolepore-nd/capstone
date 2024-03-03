import React from "react";
import { useNavigate } from "react-router-dom";
import Centerer from "components/Centerer/Centerer";
import Nav from "components/Nav/Nav";
import logo from "assets/Logo.svg";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header_container">
      <Centerer>
        <img
          className="header_logo"
          src={logo}
          alt="Logo"
          aria-label="Logo"
          onClick={handleLogoClick}
        />
        <Nav />
      </Centerer>
    </header>
  );
}

export default Header;
