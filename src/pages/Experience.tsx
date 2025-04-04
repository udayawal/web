import React from 'react';
import { Briefcase, Calendar, Cloud, Wifi, Key } from 'lucide-react';

function Experience({ isDarkMode }) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Professional Experience</h2>
      <div className="space-y-12">
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
            <li>• Deliver training on CompTIA A+, Security+, Networking, and Cybersecurity for all skill levels</li>
            <li>• Offer personalized coaching to help students master complex IT, security, and networking concepts</li>
            <li>• Create hands-on labs and real-world scenarios to build practical skills and reinforce learning</li>
          </ul>
        </div>
        {/* 4 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="w-7 h-7 text-cyan-400" />
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
        {/* 3 */}
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
            <li>• Implemented secure cross-premises connections through Azure ExpressRoute</li>
            <li>• Configured route propagation and traffic filtering for network segmentation</li>
          </ul>
        </div>
        {/* 2 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Key className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Blockchain Intern</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" />
            <span>PrismCode Info Solutions Pvt. Ltd | Jan 2022 - April 2023</span>
          </div>
          <ul className="space-y-3">
            <li>• Worked on real projects involving blockchain technology, specifically focusing on e-voting and crowdfunding</li>
            <li>• Gained hands-on experience in Truffle Framework, Ethereum, and Solidity</li>
            <li>• Enhanced my skills in blockchain development, decentralized systems and smart contracts</li>
          </ul>
        </div>
        {/* 1 */}
        <div className={`p-8 rounded-lg border hover:border-cyan-400 transition-colors group 
                        ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-900'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Wifi className="w-7 h-7 text-cyan-400" />
            <h3 className="text-xl font-semibold">Embedded System Developer</h3>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <Calendar className="w-5 h-5" /> 
            <span>Birdhouse Shelter Pvt. Ltd | July 2020 - Jan 2022</span>
          </div>
          <ul className="space-y-3">
            <li>• Contributed to a smart lock project at Birdhouse, where I played a key role in implementing advanced biometric authentication techniques, such as facial recognition and fingerprint technology, to enhance the security of access systems</li>
            <li>• As an Embedded System Developer at Birdhouse, I contributed to a smart cart project that delivered food to customers rooms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
