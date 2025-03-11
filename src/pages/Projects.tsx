import React from 'react';
import { Wifi, Cloud, Shield, Key } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

function Projects({ isDarkMode }: ProjectsProps) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Featured Projects</h2>
      
      <div className="grid gap-8">
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Wifi className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Wi-Fi Guardian</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Ethical Wi-Fi security analysis tool using Raspberry Pi and open-source security tools to enhance wireless network protection. Implements advanced packet analysis and intrusion detection capabilities.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Raspberry Pi</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Network Security</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Python</span>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Cloud className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Azure Sentinel SIEM</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Configured Azure Sentinel for real-time cyber attack monitoring and geolocation tracking using PowerShell scripts and Log Analytics. Implemented automated threat response workflows and custom detection rules.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Azure</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">SIEM</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">PowerShell</span>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-lg border hover:border-cyan-400 transition-colors group`}>
          <div className="flex items-center gap-4 mb-4">
            <Key className="w-8 h-8 text-cyan-400" />
            <h3 className="text-2xl font-semibold">Smart Lock with Advanced Biometric Authentication</h3>
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Patent-pending smart lock system implementing advanced biometric authentication techniques including multi-factor fingerprint authentication, 3D facial mapping, and anti-spoofing technology.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Patent</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">Biometrics</span>
            <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">IoT Security</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;