import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src={logo} alt="Riverstone Laser Logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            Riverstone Laser is your trusted destination for advanced skincare solutions.
            We offer state-of-the-art treatments using certified technology to help you feel radiant and confident.
          </p>
        </div>

        <div className="footer-column">
          <h4>Treatments</h4>
          <ul>
            <li><Link to="/services">Laser Hair Removal</Link></li>
            <li><Link to="/services">Facials</Link></li>
            <li><Link to="/services">Wax</Link></li>
            <li><Link to="/services">Anti-Aging Treatment</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p><strong>Phone:</strong> 604-621-8311</p>
          <p><strong>Address:</strong><br />
            2961 Townline Rd<br />
            Abbotsford, BC V2T 5J8<br />
            Canada
          </p>
        </div>

        <div className="footer-column">
          <h4>Business Hours</h4>
          <p>Mon: 09:00 AM – 8:00 PM</p>
          <p>Tue: Closed</p>
          <p>Wed: 09:00 AM – 8:00 PM</p>
          <p>Thu: 09:00 AM – 8:00 PM</p>
          <p>Fri: 09:00 AM – 8:00 PM</p>
          <p>Sat: 09:00 AM – 8:00 PM</p>
          <p>Sun: 09:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="women-only">Women Only Clinic</p>
        <p>© 2025 River Stone Laser and Skin Care Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
