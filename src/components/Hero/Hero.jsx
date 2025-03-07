import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const goToProducts=()=>{
    navigate('/products')
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Serving You with Quality Electrical Imports</h1>
        <p>Importing Ariel Bundles, Cable Accessories, and Electrical Fittings with reliability and excellence.</p>
        <div className="hero-buttons">
          <button onClick={goToProducts} className="hero-btn">Our Products</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;