
import QuizApp from '@/components/QuizApp';

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-quiz-navy/20 via-white/50 to-quiz-magenta/20 min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-quiz-yellow opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-quiz-cyan opacity-20 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-quiz-magenta opacity-10 blur-xl"></div>
      <QuizApp />
    </div>
  );
};

export default Index;
