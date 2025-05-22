
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
          <div className="bg-quiz-magenta rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold mr-2">
            {current}
          </div>
          <span className="text-sm font-medium text-quiz-navy">
            / {total} kérdés
          </span>
        </div>
        <div className="bg-quiz-navy/10 px-4 py-1 rounded-full">
          <span className="text-sm font-bold text-quiz-navy">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
      
      <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-quiz-magenta via-quiz-cyan to-quiz-yellow rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-1 -left-2 w-4 h-4 rounded-full bg-quiz-yellow opacity-70"></div>
      <div className="absolute -bottom-1 -right-2 w-3 h-3 rounded-full bg-quiz-cyan opacity-70"></div>
    </div>
  );
};

export default ProgressBar;
