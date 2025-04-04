import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  isDarkMode: boolean;
}

function Certifications({ isDarkMode }: CertificationsProps) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Professional Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="https://www.credly.com/badges/7411fa06-2021-4fa6-a586-17294109e14d/public_url" 
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">CompTIA Security+</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: GCY8KJQRL1RQ1KGM</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
        <a href="https://www.credly.com/badges/9d263659-1050-438e-adbd-cae401f0b5b3/public_url"
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Microsoft SC-900</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: 1402-2354</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
        <a href="https://www.credly.com/badges/cb3105c4-fb96-4acc-b80c-c9b441d50851/public_url" 
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Microsoft AZ-900</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: 1391-4580</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
        <a href="https://www.credly.com/badges/0f6c42b4-b392-4c3b-9095-ba54d47e49fd/public_url" 
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Microsoft AI-900</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: 1435-9276</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
        <a href="https://www.credly.com/badges/0c523eed-a910-4f03-8d4b-ca451a2c8c1a" 
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Scrum Foundation Professional Certification - SFPC</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: 87053760</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Certifications;