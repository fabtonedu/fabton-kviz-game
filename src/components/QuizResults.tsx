
import React from 'react';
import { QuizResult } from '@/types/quiz';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ result, onRestart }) => {
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-quiz-cyan';
    if (percentage >= 40) return 'text-quiz-yellow';
    return 'text-red-500';
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return 'Kiváló! 🏆';
    if (percentage >= 80) return 'Remek munka! 🌟';
    if (percentage >= 70) return 'Jó eredmény! 👍';
    if (percentage >= 60) return 'Szép próbálkozás! 😊';
    if (percentage >= 40) return 'Gyakorolj még! 📚';
    return 'Ne add fel! 💪';
  };

  const circlePercentage = (result.percentage / 100) * 283; // 283 is approximately 2π * 45 (radius)

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto animate-scale-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-quiz-navy mb-4">
          Kvíz Befejezve!
        </h2>
        
        {/* Circular Progress */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray="283"
              strokeDashoffset={283 - circlePercentage}
              className="text-quiz-magenta transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor(result.percentage)}`}>
              {result.percentage}%
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-quiz-navy">
          {getScoreMessage(result.percentage)}
        </h3>
        
        <p className="text-lg text-gray-600 mb-6">
          {result.score} helyes válasz {result.totalQuestions} kérdésből
        </p>
      </div>

      {/* Score Breakdown */}
      <div className="bg-gradient-to-r from-quiz-magenta/10 to-quiz-cyan/10 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-quiz-magenta">
              {result.score}
            </div>
            <div className="text-sm text-gray-600">Helyes</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-quiz-navy">
              {result.totalQuestions - result.score}
            </div>
            <div className="text-sm text-gray-600">Hibás</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onRestart}
          className="bg-quiz-navy text-white px-8 py-4 rounded-xl font-semibold text-lg
                   hover:bg-quiz-navy/90 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Újra Próbálom
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
