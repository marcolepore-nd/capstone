import React from 'react';
import { navPages } from 'variables/variables';
import './Nav.scss';

function Nav() {
  return (
    <nav className='nav_container'>
      <ul className='nav_list'>
        {navPages.map((page, index) => (
          <li className='nav_item' key={index}>
            <a href={page.path} aria-label={page.name}>
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
