import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';

function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="footer__logo" alt="" />
      <div className="footer__links">
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </div>
      <div className="footer__icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={pinterestIcon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
