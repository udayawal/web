import React from 'react';
import { Shield, Lock, Server, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  isDarkMode: boolean;
}

function Home({ isDarkMode }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 transition-colors">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4 text-gray-300">
                <span className="text-cyan-400">Securing</span> Digital Assets
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Information Security Professional specializing in threat detection, incident response, and security architecture
              </p>
              <a
                href="https://www.linkedin.com/messaging/thread/new/?recipient=uday-awal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg font-medium transition-colors hover:opacity-90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400">
                <img 
                  src="https://avatars.githubusercontent.com/u/80699327?v=4"
                  alt="Uday Awal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <section className="py-5"></section>

      {/* Skills Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}>
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Analysis</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expert in identifying and mitigating security vulnerabilities</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}>
              <Lock className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Access Control</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Implementation of robust authentication systems</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}>
              <Server className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Secure architecture design and implementation</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}>
              <AlertTriangle className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rapid threat detection and mitigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Experience</h2>
          <div className="space-y-6 px-2 md:px-0 overflow-visible">

            {/* Vosyn */}
            <Link
              to="/experience"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Cyber Security Analyst Intern
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                Vosyn | May 2025 - Aug 2025
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Conducted IT risk assessments, security audits, and monitoring across cloud and on-prem systems.
              </p>
            </Link>

            {/* Varsity Tutors */}
            <Link
              to="/experience"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Cyber Security Instructor
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                Varsity Tutors | Feb 2025 - Present
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Deliver training on CompTIA A+, Security+, and hands-on SOC concepts with tools like Nmap and Wireshark.
              </p>
            </Link>

            {/* Celebal */}
            <Link
              to="/experience"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Cloud Infrastructure and Security Intern
              </h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                Celebal Technologies | Jun 2023 - Aug 2023
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Built secure Azure network architectures with VNet peering, ExpressRoute, and route filtering.
              </p>
            </Link>

            <Link 
              to="/experience"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/projects"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <div className="flex flex-col mb-4" style={{ height: '400px' }}>
                <div className="w-full flex-1">
                  <img
                    src="https://raw.githubusercontent.com/udayawal/web/refs/heads/main/src/img/Wi-Fi%20Guardian.jpeg"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full pt-4 px-2">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Wi-Fi Guardian
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                    Ethical Wi-Fi security analysis tool.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/projects"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <div className="flex flex-col mb-4" style={{ height: '400px' }}>
                <div className="w-full flex-1">
                  <img
                    src="https://raw.githubusercontent.com/udayawal/web/refs/heads/main/src/img/SIEM.png"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full pt-4 px-2">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Azure Sentinel SIEM
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                    Real-time cyber attack monitoring.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/projects"
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <div className="flex flex-col mb-4" style={{ height: '400px' }}>
                <div className="w-full flex-1">
                  <img
                    src="https://raw.githubusercontent.com/udayawal/web/refs/heads/main/src/img/P3.jpg"
                    alt="Project 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full pt-4 px-2">
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Smart Lock with Biometric Authentication
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                    Advanced biometric authentication system.
                  </p>
                </div>
              </div>
            </Link>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-5">
        <div className="container mx-auto px-2 md:px-6 overflow-visible">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Certifications</h2>
          <div className="space-y-6">
            <Link 
              to="/certifications" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CompTIA Security+</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Certification ID: SY0-601
              </p>
            </Link>
            <Link 
              to="/certifications" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Microsoft SC-900</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Security, Compliance, and Identity Fundamentals
              </p>
            </Link>
            <Link 
              to="/certifications"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All Certifications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container mx-auto px-2 md:px-6 overflow-visible">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
          <Link 
            to="/contact" 
            className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:scale-[1.02] hover:shadow-xl hover:border-[#9EFCFF]`}
          >
            <div className="max-w-2xl">
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                I'm always open to discussing cybersecurity projects, professional opportunities, or sharing insights about information security.
              </p>
              <div className="space-y-4">
                📧 <a 
                  href="mailto:udayawal11@gmail.com" 
                  className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} underline hover:text-cyan-400 transition-colors`}
                >
                  udayawal11@gmail.com
                </a>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  📱 +1 263 881 8890
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  📍 Montreal, Canada
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Spacer */}
      <section className="py-5"></section>
    </div>
  );
}

export default Home;
