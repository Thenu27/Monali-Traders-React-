import React, { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const goToProductsPage =()=>{
    navigate('/products')
  }

  const goToHome=()=>{
    navigate('/')
  }

  const goToAbout=()=>{
    navigate('/about')
  }

  const goToContact=()=>{
    navigate('/contact')
  }


  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <h1>Monali<span>Traders</span></h1>
        </div>
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a className='nav-link'  onClick={goToHome}>Home</a></li>
          <li><a className='nav-link' onClick={goToProductsPage}>Products</a></li>
          <li><a className='nav-link' onClick={goToAbout}>About</a></li>
          <li><a className='nav-link'onClick={goToContact} >Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;