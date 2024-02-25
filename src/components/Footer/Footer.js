import React from 'react';
import Centerer from 'components/Centerer/Centerer';
import { navPages, contacts, socialMedia } from 'variables/variables';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer_container'>
      <Centerer>
        <div className='footer_content'>
          <div className='footer_column'>
            <h5 className='footer_columnTitle'>Navigation</h5>
            <ul className='footer_columnItems'>
              {navPages.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer_column'>
            <h5 className='footer_columnTitle'>Contacts</h5>
            <ul className='footer_columnItems'>
              {contacts.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='footer_column'>
            <h5 className='footer_columnTitle'>Social Media</h5>
            <ul className='footer_columnItems'>
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Centerer>
    </footer>
  );
}

export default Footer;
