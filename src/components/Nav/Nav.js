import React from 'react';
import { navPages } from 'variables/variables';

function Nav() {
  return (
    <nav>
      <ul>
        {navPages.map((page, index) => (
          <li key={index}>
            <a href={page.path}>
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
