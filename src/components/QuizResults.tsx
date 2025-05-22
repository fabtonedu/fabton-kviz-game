
import React, { useEffect } from 'react';
import { QuizResult } from '@/types/quiz';
import confetti from 'canvas-confetti';

interface QuizResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ result, onRestart }) => {
  useEffect(() => {
    // Trigger confetti when component mounts
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(confettiInterval);
      }
      
      // Since we want to make it celebratory, add various colors and shapes
      confetti({
        particleCount: 3,
        startVelocity: 0,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.4, 0.4)
      });
    }, 250);

    // Run bigger burst immediately
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Cleanup the interval
    return () => clearInterval(confettiInterval);
  }, []);

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
        
        <p className="text-lg text-quiz-navy mb-6">
          🎉 Szuper válaszok, ügyes voltál!
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
      
      {/* Support Message */}
      <div className="bg-blue-50 rounded-xl p-4 mb-6 text-center border border-blue-100">
        <p className="text-quiz-navy">
          Ha tetszett ez a kvíz, és szeretnél segíteni abban, hogy csapatunk kijusson a sydney-i döntőre, támogass minket lehetőségeid szerint.
        </p>
        <p className="text-quiz-navy font-semibold mt-2">
          Mi pedig szívből hálásak vagyunk – és leszünk! 💙
        </p>
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
