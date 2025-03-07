import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title left-align">About Monali Traders</h2>
          <p>Founded in 2005, Monali Traders has established itself as a leader in international trade, specializing in a diverse range of products including textiles, electronics, agricultural commodities, and industrial equipment.</p>
          <p>With a commitment to excellence, we have built strong relationships with suppliers and customers across the globe, enabling seamless trade operations and reliable service delivery.</p>
          <p>Our team of experienced professionals works tirelessly to ensure that every trade transaction meets our high standards of quality and efficiency.</p>
          <button className="btn">Our History</button>
        </div>
        <div className="about-image">
          <img src="https://source.unsplash.com/random/600x400/?office" alt="Monali Traders Office" />
        </div>
      </div>
    </section>
  );
};

export default About;