import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <Router basename="/">
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ScrollToTop />        
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          <Route path="/certifications" element={<Certifications isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        </Routes>
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}
export default App;