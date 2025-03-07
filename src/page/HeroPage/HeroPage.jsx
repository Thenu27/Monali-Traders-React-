import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import About from './components/About/About';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testominials';
import './App.css';

function HeroPage() {
  return (
    <div className="hero-page">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default HeroPage;