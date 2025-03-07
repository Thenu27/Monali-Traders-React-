import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About <span className="highlight">MONALI TRADERS</span></h1>
          <div className="divider"></div>
          <p className="tagline">Delivering Excellence Since 2010</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2 className='about-title'>Monali Traders</h2>
          <p>
          Welcome to Monali Traders, your trusted partner in importing and supplying Aerial Bundle Cable Accessories and 
          Electrical Fittings. We are committed to delivering high-quality products that ensure precision, safety, and durability 
          in electrical installations. Our range includes insulated connectors, suspension clamps, tension clamps, and brackets for
           efficient cable management, along with premium electrical fixtures, terminals, and conduits. Sourced to meet international 
           standards, our products cater to industrial, commercial, and residential projects, providing reliable and long-lasting solutions.




</p>



                    {/* </p>
          <p>
          We offer a comprehensive range of Aerial Bundle Cable Accessories, including insulated connectors, suspension clamps, 
          tension clamps, and brackets, all designed for efficient and secure cable management in electrical installations. Additionally,
           our selection of Electrical Fittings features premium-quality electrical fixtures, terminals, conduits, and other essential 
           components, making us the ideal partner for installations of all scales, from large industrial projects to smaller residential 
           needs..
          </p> */}
        </div>
        
        <div className="stats-container">
          <div className="stat-box">
            <h3>14+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-box">
            <h3>3+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-box">
            <h3>6k+</h3>
            <p>Successful Transactions</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
          Monali Traders is committed to providing high-quality Aerial Bundle Cable Accessories and Electrical Fittings, 
          ensuring safety, efficiency, and reliability for all electrical projects.
          </p>
        </div>
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
          To be a trusted leader in Aerial Bundle Cable Accessories and Electrical Fittings, delivering quality, reliability, 
          and innovation for safer and efficient electrical solutions.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="divider"></div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We conduct business with the highest ethical standards, ensuring transparency in every transaction.</p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>We strive for excellence in all aspects of our operations, from product quality to customer service.</p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>Our partners and clients can depend on us to deliver consistent quality and service, time after time.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;