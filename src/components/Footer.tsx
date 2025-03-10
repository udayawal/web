import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t py-8`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:udayawal11@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                <Mail className="w-5 h-5" />
                udayawal11@gmail.com
              </a>
              <a href="tel:+12638818890" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                <Phone className="w-5 h-5" />
                +1 263 881 8890
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-cyan-400">Home</Link>
              <Link to="/experience" className="block text-gray-400 hover:text-cyan-400">Experience</Link>
              <Link to="/projects" className="block text-gray-400 hover:text-cyan-400">Projects</Link>
              <Link to="/certifications" className="block text-gray-400 hover:text-cyan-400">Certifications</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Profiles</h3>
            <div className="space-y-2">
              <a href="https://github.com/yourusername" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                GitHub <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/uday-awal" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://tryhackme.com/p/yourusername" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                TryHackMe <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <p className="text-gray-400">© 2025 Uday Awal</p>
              <p className="text-gray-400">All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;