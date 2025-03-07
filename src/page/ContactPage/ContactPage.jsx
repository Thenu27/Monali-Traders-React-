import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contactPage-container">
      <div className="contactPage-card">
        <h1 className="contactPage-title">Contact Us</h1>
        <div className="contactPage-info">
          <div className="contactPage-item">
            <div className="contactPage-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contactPage-details">
              <h2>Email</h2>
              <p><a href="mailto:productivityp@gmail.com">productivityp@gmail.com</a></p>
            </div>
          </div>
          
          <div className="contactPage-item">
            <div className="contactPage-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contactPage-details">
              <h2>Phone</h2>
              <p><a href="tel:+15551234567">+94 71 487 3274</a></p>
            </div>
          </div>
          
          <div className="contactPage-item">
            <div className="contactPage-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contactPage-details">
              <h2>Location</h2>
              <p>Poorwarama Rd<br />Kirulapone<br />Colombo<br />Srilanka</p>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="map-container">
        <div className="map-placeholder">
            <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.0850288503125!2d79.87973067499607!3d6.880416693118494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInNDkuNSJOIDc5wrA1Mic1Ni4zIkU!5e0!3m2!1sen!2slk!4v1732777535118!5m2!1sen!2slk" />

        </div>
      </div>
    </div>
  );
};

export default ContactPage;