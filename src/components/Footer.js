import React from 'react';
import { navPages, contacts, socialMedia } from '../variables/variables';
import footerImg from "../assets/restauranfood.jpg";

function Footer() {
  return (
    <footer className='footer'>
      <img src={footerImg} alt="Restaurant Food" />
      <div>
        Doormat Navigation
        <ul>
          {navPages.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Contacts
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        Social Media
        <ul>
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
