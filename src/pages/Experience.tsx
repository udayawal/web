import React from 'react';
import { Briefcase, Calendar, Cloud, Wifi, Key, Shield } from 'lucide-react';

function Experience({ isDarkMode }) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Professional Experience</h2>
      <div className="space-y-12">

        {/* 6 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Cyber Security Analyst Intern</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>Vosyn | May 2025 - August 2025</span>
          </div>
          <ul className="space-y-3">
            <li>• Performed IT risk assessments and developed mitigation plans</li>
            <li>• Participated in internal security audits to validate compliance</li>
            <li>• Generated dashboards and reports tracking vulnerabilities and incidents</li>
            <li>• Conducted security monitoring and alert triage across cloud and on-prem systems</li>
          </ul>
        </div>

        {/* 5 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Cyber Security Instructor</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>Varsity Tutors | Feb 2025 - Present</span>
          </div>
          <ul className="space-y-3">
            <li>• Deliver training on CompTIA A+, Security+, and other foundational certifications</li>
            <li>• Teach hands-on cybersecurity skills with Nmap, Burp Suite, Wireshark, and Metasploit</li>
            <li>• Guide students through labs covering threat analysis, vulnerability assessment, and SOC basics</li>
          </ul>
        </div>

        {/* 4 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Cloud className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Cloud Infrastructure and Security Intern</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>Celebal Technologies | June 2023 - August 2023</span>
          </div>
          <ul className="space-y-3">
            <li>• Facilitated VNet pairing and Hub-and-Spoke architecture setup in Azure</li>
            <li>• Implemented secure cross-premises connections with Azure ExpressRoute</li>
            <li>• Configured route propagation and traffic filtering for network segmentation</li>
          </ul>
        </div>

        {/* 3 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Key className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Blockchain Intern</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>PrismCode Info Solutions Pvt. Ltd | Jan 2022 - Apr 2023</span>
          </div>
          <ul className="space-y-3">
            <li>• Worked on blockchain projects in e-voting and crowdfunding</li>
            <li>• Gained hands-on experience with Truffle Framework, Ethereum, and Solidity</li>
            <li>• Enhanced skills in decentralized systems and smart contracts</li>
          </ul>
        </div>

        {/* 2 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Wifi className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Embedded System Developer</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" /> 
            <span>Birdhouse Shelter Pvt. Ltd | Jul 2020 - Jan 2022</span>
          </div>
          <ul className="space-y-3">
            <li>• Contributed to smart lock project with biometric authentication (facial recognition, fingerprint)</li>
            <li>• Developed smart cart project delivering food to customer rooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
