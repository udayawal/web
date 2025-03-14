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
        <a href="https://www.comptia.org/certifications/security" 
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">CompTIA Security+</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Certification ID: SY0-601</p>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-cyan-400 transition-colors">
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        <a href="https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/"
           className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Microsoft SC-900</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Security, Compliance, and Identity Fundamentals</p>
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