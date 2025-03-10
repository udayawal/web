import React from 'react';
import { Shield, Lock, Server, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  isDarkMode: boolean;
}

function Home({ isDarkMode }: HomeProps) {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-cyan-400">Securing</span> Digital Assets
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Information Security Professional specializing in threat detection, incident response, and security architecture
              </p>
              <Link 
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-cyan-400 text-gray-900' : 'bg-[#9EFCFF] text-gray-900'} rounded-lg font-medium transition-colors hover:opacity-90`}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=256&h=256&fit=crop" 
                alt="Uday Awal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
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

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Experience</h2>
          <div className="space-y-6">
            <Link 
              to="/experience/1" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Information Security Analyst</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>PrismCode Info Solutions Pvt. Ltd | Jan 2024 - August 2024</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Led security monitoring and incident response initiatives, utilizing SIEM tools for threat detection and analysis.
              </p>
            </Link>
            <Link 
              to="/experience/2" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Cloud Infrastructure and Security Intern</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>Celebal Technologies | June 2023 - August 2023</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Implemented secure cloud infrastructure solutions using Azure, focusing on network security and access control.
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

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Certifications</h2>
          <div className="space-y-6">
            <Link 
              to="/certifications/1" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>CompTIA Security+</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Certification ID: SY0-601
              </p>
            </Link>
            <Link 
              to="/certifications/2" 
              className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}
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

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Contact</h2>
          <Link 
            to="/contact" 
            className={`block ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} transition-all transform hover:scale-105 hover:shadow-lg hover:border-[#9EFCFF]`}
          >
            <div className="max-w-2xl">
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                I'm always open to discussing cybersecurity projects, professional opportunities, or sharing insights about information security.
              </p>
              <div className="space-y-4">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  📧 udayawal11@gmail.com
                </p>
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
    </div>
  );
}

export default Home;