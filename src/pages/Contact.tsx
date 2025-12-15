import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

function Contact({ isDarkMode }: ContactProps) {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">Let's Connect</h2>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <a
            href="mailto:udayawal11@gmail.com"
            className={`flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${isDarkMode
              ? 'bg-gray-800 border-gray-700 hover:border-cyan-400/50'
              : 'bg-white border-gray-200 hover:border-cyan-400/50'
              }`}
          >
            <div className={`p-4 rounded-full mb-6 ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-100 group-hover:bg-gray-50'} transition-colors`}>
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>udayawal11@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/messaging/thread/new/?recipient=uday-awal"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${isDarkMode
              ? 'bg-gray-800 border-gray-700 hover:border-cyan-400/50'
              : 'bg-white border-gray-200 hover:border-cyan-400/50'
              }`}
          >
            <div className={`p-4 rounded-full mb-6 ${isDarkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-100 group-hover:bg-gray-50'} transition-colors`}>
              <Linkedin className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>Connect with me</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;