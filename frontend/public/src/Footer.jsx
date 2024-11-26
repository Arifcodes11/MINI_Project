import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h4>About Us</h4>
          <p>
          Empower your tomato cultivation journey with our comprehensive website dedicated to supporting farmers every step of the way.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/disease">Detection</a>
          <a href="/Temperature">Temperature</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-section footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@tomatocultivation.com<br/>
          Phone: +91 95408 56975</p>
        </div>
        <div className="footer-section footer-social">
          <h4>Join us today</h4>
          <p>Discover a new era of farming support tailored to 
            your needs.Our platform is here to enhance your productivity 
            and profitability. Embrace the future of agriculture with us and transform your farming journey today.</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Tomato Cultivation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
