// 
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We're here to help and answer any questions you might have</p>
      </div>
      
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3 className="card-title">Visit Us</h3>
          <p className="card-text">Poorwarama rd,</p>
          <p className="card-text">Kirulapone,</p>
          <p className="card-text">Colombo,</p>
          <p className="card-text">Srilanka</p>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3 className="card-title">Call Us</h3>
          <p className="card-text">Main: 071 487 3274</p>
          {/* <p className="card-text">Support: (212) 555-5678</p>
          <p className="card-text">Toll-free: 1-800-555-9876</p> */}
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3 className="card-title">Email Us</h3>
          <p className="card-text">productivityp@gmail.com</p>
          <p className="card-text">upulliyana@yahoo.com</p>
          {/* <p className="card-text">sales@company.com</p> */}
        </div>
      </div>
      
      <div className="contact-hours">
        <h3 className="hours-title">Business Hours</h3>
        <div className="hours-grid">
          <div className="day">Monday - Friday</div>
          <div className="time">9:00 AM - 9:00 PM EST</div>
          
          <div className="day">Saturday-Sunday</div>
          <div className="time">10:00 AM - 9:00 PM EST</div>
          

        </div>
      </div>
      
      {/* <div className="contact-social">
        <h3 className="social-title">Connect With Us</h3>
        <div className="social-icons">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;