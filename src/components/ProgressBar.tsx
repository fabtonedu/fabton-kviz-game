
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8 relative">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="bg-quiz-yellow rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold mr-2 shadow-lg">
            {current}
          </div>
          <span className="text-sm font-medium text-quiz-navy">
            / {total} kérdés
          </span>
        </div>
        <div className="bg-quiz-navy/20 px-4 py-1 rounded-full shadow-inner">
          <span className="text-sm font-bold text-quiz-navy">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      
      <div className="w-full bg-white rounded-full h-6 overflow-hidden shadow-inner p-1">
        <div 
          className="h-full bg-quiz-yellow rounded-full transition-all duration-500 ease-out shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-1 -left-2 w-4 h-4 rounded-full bg-quiz-yellow opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-1 -right-2 w-3 h-3 rounded-full bg-quiz-cyan opacity-70 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-quiz-magenta opacity-50 animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

export default ProgressBar;
