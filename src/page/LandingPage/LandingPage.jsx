import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testominials';
import Contact from '../../components/contact/contact';
import Footer from '../../components/Footer/Footer';
import './LandingPage.css';
import FAQ from '../../components/FAQ/FAQ';

const LandingPage=()=> {
  return (
    <div className="app">
      <Hero />
      <Features />
      <FAQ/>
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default LandingPage;