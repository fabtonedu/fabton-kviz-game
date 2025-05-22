
import React from 'react';
import { Question } from '@/types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
  showFeedback: boolean;
  isCorrectAnswer: boolean | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  onNext,
  isLastQuestion,
  showFeedback,
  isCorrectAnswer
}) => {
  const optionLabels = ['A', 'B', 'C'];

  const getOptionButtonStyle = (index: number) => {
    const isSelected = selectedOption === index;
    
    // Base styles for all buttons
    let buttonStyle = `
      bg-white text-quiz-navy p-6 rounded-xl text-lg font-semibold
      transition-all duration-200 ease-out
      flex items-center justify-start gap-4
      min-h-[80px] md:min-h-[100px]
      border-2 shadow-lg hover:shadow-xl
      ${isSelected ? 'ring-4 ring-quiz-navy/30 scale-105' : 'hover:scale-102 border-gray-200'}
    `;
    
    // Add feedback colors when showing feedback
    if (showFeedback && isSelected) {
      if (isCorrectAnswer) {
        buttonStyle += ' border-green-500 bg-green-100';
      } else {
        buttonStyle += ' border-red-500 bg-red-100';
      }
      
      // If this is the correct answer but not selected
      if (index === question.correctAnswer && !isSelected) {
        buttonStyle += ' border-green-500 bg-green-50';
      }
    }
    
    return buttonStyle;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <div className="inline-block bg-quiz-navy/10 text-quiz-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
          {question.category}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-quiz-navy leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onSelectOption(index)}
            disabled={showFeedback}
            className={getOptionButtonStyle(index)}
          >
            <span className={`bg-quiz-${index === 0 ? 'magenta' : index === 1 ? 'cyan' : 'navy'} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
              {optionLabels[index]}
            </span>
            <span className="text-left flex-1">{option}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={selectedOption === null}
          className={`
            px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200
            ${selectedOption !== null 
              ? 'bg-quiz-navy text-white hover:bg-quiz-navy/90 hover:scale-105 shadow-lg' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isLastQuestion ? 'Befejezés' : showFeedback ? 'Következő' : 'Ellenőrzés'}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
