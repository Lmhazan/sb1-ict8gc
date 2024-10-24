import React, { useState } from 'react';
import { Upload, Calendar, Clock, Settings, Home, Share2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import UploadSection from './components/UploadSection';
import ConnectedAccounts from './components/ConnectedAccounts';
import ScheduledPosts from './components/ScheduledPosts';

function App() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-8">
        {activeTab === 'upload' && (
          <div className="space-y-8">
            <UploadSection />
            <ConnectedAccounts />
            <ScheduledPosts />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;