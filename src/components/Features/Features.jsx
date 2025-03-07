import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '💵',
      title: 'Competitive Pricing',
      description: 'We offer competitive pricing without compromising on quality, ensuring you get the best value for your electrical needs.'
    },
    {
      id: 2,
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Our products go through rigorous testing and inspection to ensure they meet the highest industry standards'
    },
    {
      id: 3,
      icon: '📞',
      title: ' Technicle Guidance',
      description: 'We provide expert technical assistance and installation guidance to ensure seamless integration of our products into your projects.'
    },
    {
      id: 4,
      icon: '🛒',
      title: 'Products Variety',
      description: 'Explore our wide range of high-quality electrical products, including Ariel Bundles, Cable Accessories, and Electrical Fittings, to meet all your needs.'
    }
  ];

  return (
    <section id="products" className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-container">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;