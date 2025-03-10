import React from 'react';
import { Key, Fingerprint, Scan } from 'lucide-react';

function Patents() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">Patents</h2>
      
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <Key className="w-8 h-8 text-cyan-400" />
          <h3 className="text-2xl font-semibold">Smart Lock with Advanced Biometric Authentication</h3>
        </div>
        
        <p className="text-gray-300 mb-8">
          Patent for an innovative smart lock system implementing advanced biometric authentication techniques for enhanced security access systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Fingerprint className="w-6 h-6 text-cyan-400" />
              <h4 className="text-lg font-semibold">Biometric Features</h4>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Multi-factor fingerprint authentication</li>
              <li>• Advanced pattern recognition</li>
              <li>• Anti-spoofing technology</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Scan className="w-6 h-6 text-cyan-400" />
              <h4 className="text-lg font-semibold">Facial Recognition</h4>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• 3D facial mapping</li>
              <li>• Liveness detection</li>
              <li>• Low-light performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patents;