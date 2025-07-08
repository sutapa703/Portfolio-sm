import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto">
            <svg
              className="animate-spin duration-1000"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="35"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="220"
                strokeDashoffset="220"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-bounce">
          Chin Tapak Dum Dum!
        </div>
        <div className="mt-4 text-sm text-gray-400 animate-pulse">
          Loading amazing things...
        </div>
      </div>
    </div>
  );
};

export default Preloader;