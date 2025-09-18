import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CountyGovernment from './pages/CountyGovernment';
import HMIS from './pages/HMIS';
import WhyUs from './pages/WhyUs';
import Experience from './pages/Experience';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import { initScrollAnimations, initParallax } from './utils/scrollAnimations';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const cleanupScrollAnimations = initScrollAnimations();
    const cleanupParallax = initParallax();

    // Cleanup on unmount
    return () => {
      cleanupScrollAnimations();
      cleanupParallax();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
      <main id="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/county-government" element={<CountyGovernment />} />
            <Route path="/hmis" element={<HMIS />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
