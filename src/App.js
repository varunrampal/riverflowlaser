import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Import WhatsApp icon

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/16046218311"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </Router>
  );
}

export default App;
