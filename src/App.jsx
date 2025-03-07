import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './page/LandingPage/LandingPage';
import ProductPage from './page/ProductPage/ProductPage';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './page/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import ContactPage from './page/ContactPage/ContactPage';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;