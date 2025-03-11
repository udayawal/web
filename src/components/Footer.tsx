import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border-t py-6`}>
      <div className="container mx-auto px-6">
        {/* Center Align All Sections */}
        <div className="flex flex-wrap justify-center items-start text-center gap-x-12 gap-y-4">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contact</h3>
            <div className="space-y-1">
              <a href="mailto:udayawal11@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300">
                <Mail className="w-5 h-5" /> udayawal11@gmail.com
              </a>
              <a href="tel:+12638818890" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300">
                <Phone className="w-5 h-5" /> +1 263 881 8890
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="w-60">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Quick Links</h3>
            <div className="flex justify-between">
              {/* Left Side */}
              <div className="space-y-1 text-left">
                <Link to="/" className="block text-gray-400 hover:text-cyan-400 transition duration-300">Home</Link>
                <Link to="/experience" className="block text-gray-400 hover:text-cyan-400 transition duration-300">Experience</Link>
                <Link to="/projects" className="block text-gray-400 hover:text-cyan-400 transition duration-300">Projects</Link>
              </div>
              {/* Right Side */}
              <div className="space-y-1 text-left">
                <Link to="/certifications" className="block text-gray-400 hover:text-cyan-400 transition duration-300">Certifications</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-cyan-400 transition duration-300">Contact</Link>
              </div>
            </div>
          </div>
          {/* Profiles */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Profiles</h3>
            <div className="space-y-1">
              <a href="https://linkedin.com/in/uday-awal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300">
                LinkedIn <ExternalLink className="w-5 h-5" />
              </a>
              <a href="https://github.com/udayawal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300">
                GitHub <ExternalLink className="w-5 h-5" />
              </a>
              <a href="https://tryhackme.com/p/udayAwal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300">
                TryHackMe <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>      
      {/* Legal Section */}
      <div className="w-full text-center mt-6 ">
        <p className="text-gray-500 text-sm opacity-80">© 2025 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
