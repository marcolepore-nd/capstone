import React, { useState } from "react";
import { navPages } from "variables/variables";
import { useMobileDetect } from "MoblieListener";
import menuIcon from "assets/icon_hamburger_menu.svg";
import "./Nav.scss";

function Nav() {
  const { isMobile } = useMobileDetect();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav_container">
      {isMobile ? (
        <>
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="menu_icon"
            onClick={() => setIsMenuOpen(true)}
          />
          {isMenuOpen && (
            <ul className="nav_list_mobile">
              <div className="nav_close" onClick={() => setIsMenuOpen(false)}>
                <p>CLOSE</p>
              </div>
              {navPages.map((page, index) => (
                <li className="nav_item" key={index}>
                  <a href={page.path} aria-label={page.name}>
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <ul className="nav_list">
          {navPages.map((page, index) => (
            <li className="nav_item" key={index}>
              <a href={page.path} aria-label={page.name}>
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
