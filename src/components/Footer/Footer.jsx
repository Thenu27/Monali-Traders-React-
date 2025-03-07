import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const goToProducts = () => {
    navigate('/products');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay to ensure navigation completes before scrolling
  };

  const goToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay to ensure navigation completes before scrolling
  };
  
  const goToAbout = () => {
    navigate('/about');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay to ensure navigation completes before scrolling
  };


  const goToContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Delay to ensure navigation completes before scrolling
  };
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <h2>Monali<span>Traders</span></h2>
          <p>Powering Connections with Quality,And Reliability.</p>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={goToHome}>Home</a></li>
              <li><a onClick={goToProducts}>Products</a></li>
              <li><a onClick={goToAbout}>About</a></li>
              <li><a onClick={goToContact}>Contact</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Products</h3>
            <ul>
              <li><a onClick={goToProducts}>Safety Equipment</a></li>
              <li><a onClick={goToProducts}>Fuses and Protection Devices</a></li>
              <li><a onClick={goToProducts}>Cable and Conductor Accessories</a></li>
              <li><a onClick={goToProducts}>Lighting Solutions</a></li>
              <li><a onClick={goToProducts}>Stringing and Welding Accessories</a></li>

            </ul>
          </div>
          <div className="link-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>&copy; 2025 Monali Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;