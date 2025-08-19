import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`custom-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          {/* ✅ Logo now links to home page */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Riverstonelaser Logo" />
          </Link>
        </div>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/team" className={location.pathname === "/team" ? "active" : ""} onClick={() => setMenuOpen(false)}>Our Team</Link>
          <Link to="/testimonials" className={location.pathname === "/testimonials" ? "active" : ""} onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/faqs" className={location.pathname === "/faqs" ? "active" : ""} onClick={() => setMenuOpen(false)}>FAQs</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        <div className="phone-number">
          <a href="tel:6046218311">604-621-8311</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
