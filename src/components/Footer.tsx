import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-6`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-x-12">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="space-y-1">
              <a href="mailto:udayawal11@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                <Mail className="w-5 h-5" /> udayawal11@gmail.com
              </a>
              <a href="tel:+12638818890" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                <Phone className="w-5 h-5" /> +1 263 881 8890
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="space-y-1">
              <Link to="/" className="block text-gray-400 hover:text-cyan-400">Home</Link>
              <Link to="/experience" className="block text-gray-400 hover:text-cyan-400">Experience</Link>
              <Link to="/projects" className="block text-gray-400 hover:text-cyan-400">Projects</Link>
              <Link to="/certifications" className="block text-gray-400 hover:text-cyan-400">Certifications</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400">Contact</Link>
            </div>
          </div>
          {/* Profiles */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Profiles</h3>
            <div className="space-y-1">
              <a href="https://github.com/udayawal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                GitHub <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/uday-awal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://tryhackme.com/p/udayAwal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                TryHackMe <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <p className="text-gray-400">© 2025 Uday Awal</p>
            <p className="text-gray-400">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;