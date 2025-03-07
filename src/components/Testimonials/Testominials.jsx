import React from 'react';
import './Testominials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, Global Imports',
      content: 'Working with Monali Traders has transformed our supply chain. Their commitment to quality and timely delivery has made them our preferred trading partner.',
      image: 'https://source.unsplash.com/random/100x100/?man'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Procurement Manager, TechCorp',
      content: 'The team at Monali Traders consistently exceeds our expectations. Their global network and expertise in international trade have been invaluable to our business.',
      image: 'https://source.unsplash.com/random/100x100/?woman'
    },
    {
      id: 3,
      name: 'Robert Chen',
      position: 'Director, Eastern Textiles',
      content: 'Reliable, professional, and efficient. Monali Traders has been our trusted partner for over five years, helping us expand into new markets with confidence.',
      image: 'https://source.unsplash.com/random/100x100/?person'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-info">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;