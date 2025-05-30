
import React, { useState } from 'react';
import { Question, UserAnswer, QuizResult } from '@/types/quiz';
import { quizQuestions } from '@/data/questions';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    // If we're showing feedback, move to the next question
    if (showFeedback) {
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      const userAnswer: UserAnswer = {
        questionId: currentQuestion.id,
        selectedOption,
        isCorrect
      };

      const newUserAnswers = [...userAnswers, userAnswer];
      setUserAnswers(newUserAnswers);

      if (isLastQuestion) {
        // Calculate final results
        const score = newUserAnswers.filter(answer => answer.isCorrect).length;
        const percentage = Math.round((score / quizQuestions.length) * 100);
        
        const result: QuizResult = {
          score,
          totalQuestions: quizQuestions.length,
          percentage,
          answers: newUserAnswers
        };

        setQuizResult(result);
        setShowResults(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowFeedback(false);
        setIsCorrectAnswer(null);
      }
    } else {
      // Show feedback for the selected answer
      const isCorrect = selectedOption === currentQuestion.correctAnswer;
      setIsCorrectAnswer(isCorrect);
      setShowFeedback(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
    setQuizResult(null);
    setShowFeedback(false);
    setIsCorrectAnswer(null);
  };

  if (showResults && quizResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-quiz-cyan/20 via-quiz-magenta/10 to-quiz-yellow/20 p-4 flex items-center justify-center relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-quiz-yellow opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-quiz-cyan opacity-20 blur-xl"></div>
        
        {/* Purple shapes */}
        <div className="absolute top-0 left-0 w-48 h-48">
          <img 
            src="/lovable-uploads/bbc7f4df-1ad9-46e9-9229-88a5d4c9e861.png" 
            alt="Purple Shape" 
            className="w-full h-full opacity-10" 
          />
        </div>
        
        <div className="absolute bottom-0 right-0 w-48 h-48">
          <img 
            src="/lovable-uploads/4d4a2f2b-abcf-4f76-9293-cedf55f7af8b.png" 
            alt="Purple Shape" 
            className="w-full h-full opacity-10" 
          />
        </div>
        
        <QuizResults result={quizResult} onRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 relative">
      {/* Decorative purple circle */}
      <div className="absolute top-40 right-5 w-32 h-32 opacity-10 z-0">
        <img 
          src="/lovable-uploads/116c4839-3664-4e61-ae97-52ee9f24db90.png" 
          alt="Purple Circle" 
          className="w-full h-full" 
        />
      </div>
      
      <div className="max-w-6xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-quiz-navy mb-4">
            Tudásteszt
          </h1>
          <p className="text-lg text-gray-600">
            Teszteld a tudásodat a különböző témákban!
          </p>
        </div>

        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={quizQuestions.length} 
        />

        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
          isLastQuestion={isLastQuestion}
          showFeedback={showFeedback}
          isCorrectAnswer={isCorrectAnswer}
        />
      </div>
    </div>
  );
};

export default QuizApp;
