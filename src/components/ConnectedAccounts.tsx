import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';

const ConnectedAccounts = () => {
  const platforms = [
    { name: 'Instagram', icon: Instagram, connected: false },
    { name: 'Twitter', icon: Twitter, connected: false },
    { name: 'YouTube', icon: Youtube, connected: false },
    { name: 'Facebook', icon: Facebook, connected: false },
    { name: 'LinkedIn', icon: Linkedin, connected: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Connected Accounts</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Manage all
        </button>
      </div>

      <div className="space-y-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <div
              key={platform.name}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="font-medium">{platform.name}</span>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                Connect {platform.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectedAccounts;