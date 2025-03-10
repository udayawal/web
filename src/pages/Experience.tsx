import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

function Experience({ isDarkMode }) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Professional Experience</h2>

      <div className="space-y-12">
        <div className={`p-8 rounded-lg border transition-colors shadow 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold">Information Security Analyst</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>PrismCode Info Solutions Pvt. Ltd | Jan 2024 - August 2024</span>
          </div>
          <ul className="space-y-3">
            <li>• Monitored systems for potential threats and analyzed security events in real-time</li>
            <li>• Utilized SIEM tools for log analysis and threat intelligence</li>
            <li>• Conducted security risk assessments and implemented mitigation strategies</li>
          </ul>
        </div>

        <div className={`p-8 rounded-lg border transition-colors shadow 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold">Cloud Infrastructure and Security Intern</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>Celebal Technologies | June 2023 - August 2023</span>
          </div>
          <ul className="space-y-3">
            <li>• Facilitated VNet pairing and Hub-and-Spoke architecture setup in Azure</li>
            <li>• Implemented secure cross-premises connections through Azure ExpressRoute</li>
            <li>• Configured route propagation and traffic filtering for network segmentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
