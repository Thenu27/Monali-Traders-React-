import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0,0);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <h1>Monali<span>Traders</span></h1>
        </div>
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a className='nav-link' onClick={() => handleNavigation('/')}>Home</a></li>
          <li><a className='nav-link' onClick={() => handleNavigation('/products')}>Products</a></li>
          <li><a className='nav-link' onClick={() => handleNavigation('/about')}>About</a></li>
          <li><a className='nav-link' onClick={() => handleNavigation('/contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
