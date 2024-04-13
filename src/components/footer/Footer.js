import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import logo from "../../assets/icons/white-logo.svg"
import appleLogo from "../../assets/icons/apple.svg"
import googlePlayLogo from "../../assets/icons/google-play.svg"
import phonePreview from "../../assets/images/phone-preview.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-app-download">
          <div className="footer-app-download-text">Get the app now</div>
          <div className="footer-app-download-buttons-container">
            <Button className='footer-app-download-button' startIcon={<img src={googlePlayLogo} alt="Google Play Logo" className="app-download-icon" />}>Playstore</Button>
            <Button className='footer-app-download-button' startIcon={<img src={appleLogo} alt="Apple Logo" className="app-download-icon" />}>Appstore</Button>
          </div>
        </div>
        <div className='footer-screen-preview'>
          <img src={phonePreview} alt='phone preview'/>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-divisions">
          <div className="footer-division">
            <div>Our Markets</div>
            <ul>
              <span>Toronto</span>
              <span>Ottawa</span>
              <span>Vancouver</span>
              <span>Victoria</span>
              <span>Kelowna</span>
              <span>Peterborough</span>
              <span>Etobicoke</span>
              <span>Winnipeg</span>
            </ul>
          </div>
          <div className="footer-division">
            <div>Resources</div>
            <ul>
              <span>Media inquiries</span>
              <span>Search homes</span>
              <span>Blog</span>
              <span>Careers</span>
              <span>About us</span>
              <span>FAQ</span>
              <span>Agents</span>
            </ul>
          </div>
          <div className="footer-division">
            <div>Connect</div>
            <div className="footer-social-icons">
              <a href="facebook.com">
                <FontAwesomeIcon className='footer-brand-icon' icon={faFacebook} /> Facebook
              </a>
              <a href="instagram.com">
                <FontAwesomeIcon className='footer-brand-icon' icon={faInstagram} /> Instagram
              </a>
              <a href="tiktok.com">
                <FontAwesomeIcon className='footer-brand-icon' icon={faTiktok} /> Tiktok
              </a>
              <a href="twitter.com">
                <FontAwesomeIcon className='footer-brand-icon' icon={faTwitter} /> Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="footer-images">
          <img src="../../images/city711.png" alt="Image 1" />
          <img src="../../images/city712.png" alt="Image 2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;