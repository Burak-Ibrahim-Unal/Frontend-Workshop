import logo from './react-logo.png'
import React from 'react';

function Header() {
    return (
      <header>
        <nav className="nav">
          <img className='navLogo' src={logo} alt='react-logo'/>
          <ul className="navMenuItems">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header; // or we can define our function export default function Header