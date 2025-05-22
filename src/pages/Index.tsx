
import QuizApp from '@/components/QuizApp';

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-quiz-navy/20 via-white/50 to-quiz-magenta/20 min-h-screen relative overflow-hidden">
      {/* Logo at the top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src="/c57841ac-f5d1-4517-a160-d261c1b9c9c0.png" 
          alt="Fabton Logo" 
          className="h-10 md:h-12" 
        />
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-quiz-yellow opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-quiz-cyan opacity-20 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-quiz-magenta opacity-10 blur-xl"></div>
      
      {/* Purple shape top right */}
      <div className="absolute -top-20 -right-20 w-64 h-64">
        <img 
          src="/ce24efc0-6edd-4d7d-97ab-6a3fe81bd8ed.png"
          alt="Purple Shape" 
          className="w-full h-full opacity-10" 
        />
      </div>
      
      {/* Purple shape bottom left */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64">
        <img 
          src="/4d4a2f2b-abcf-4f76-9293-cedf55f7af8b.png"
          alt="Purple Shape" 
          className="w-full h-full opacity-10" 
        />
      </div>
      
      <QuizApp />
    </div>
  );
};

export default Index;
