import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

function Contact({ isDarkMode }: ContactProps) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Get in Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:udayawal11@gmail.com" className="text-gray-400 hover:text-cyan-400">
                  udayawal11@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+12638818890" className="text-gray-400 hover:text-cyan-400">
                  +1 263 881 8890
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">Montreal, Canada</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-cyan-400' 
                    : 'bg-gray-100 border-gray-200 focus:border-cyan-400'
                } border focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-cyan-400' 
                    : 'bg-gray-100 border-gray-200 focus:border-cyan-400'
                } border focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 focus:border-cyan-400' 
                    : 'bg-gray-100 border-gray-200 focus:border-cyan-400'
                } border focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;