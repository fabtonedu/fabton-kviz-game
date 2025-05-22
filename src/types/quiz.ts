
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: UserAnswer[];
}
