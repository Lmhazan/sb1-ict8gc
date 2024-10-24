import React from 'react';
import { Calendar } from 'lucide-react';

const ScheduledPosts = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Scheduled Posts</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          View all
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <Calendar className="h-12 w-12 mb-4" />
        <p className="text-lg font-medium">No scheduled posts</p>
        <p className="text-sm">Your scheduled posts will appear here</p>
      </div>
    </div>
  );
};

export default ScheduledPosts;