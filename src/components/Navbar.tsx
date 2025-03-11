import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Github, Linkedin, Sun, Moon, Trophy } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-cyan-400' : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold">Uday Awal</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
            <Link to="/experience" className={`${isActive('/experience')} transition-colors`}>Experience</Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors`}>Projects</Link>
            <Link to="/certifications" className={`${isActive('/certifications')} transition-colors`}>Certifications</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/udayawal" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/uday-awal" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://tryhackme.com/p/udayAwal" className={isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>
              <Trophy className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;