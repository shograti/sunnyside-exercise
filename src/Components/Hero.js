import { useState } from 'react';
import './Hero.css';
import logo from '../assets/images/logo.svg';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';

function Hero() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <div className="hero-container">
      {showHamburgerMenu && (
        <div className="hamburger-menu">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <button className="navbar__contact-button">Contact</button>
          </ul>
        </div>
      )}
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <img
          src={hamburgerIcon}
          className="hamburger-icon"
          alt=""
          onClick={handleClick}
        />

        <div className="navbar__links">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <button className="navbar__contact-button">Contact</button>
          </ul>
        </div>
      </div>
      <div className="hero">
        <h1 className="hero-title">We are creatives</h1>
        <a href="#presentation">
          <img src={arrowDown} alt="" className="arrow-down" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
