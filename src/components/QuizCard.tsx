
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const QuizCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      id: 1,
      text: "Which artist was known for drip paintings?",
      category: "History of art",
      answers: [
        { id: 'a', text: 'combination of oil paint' },
        { id: 'b', text: 'travel around the world' },
        { id: 'c', text: 'studied behavior' }
      ]
    },
    {
      id: 2,
      text: "Which painting technique uses small dots of color?",
      category: "Art techniques",
      answers: [
        { id: 'a', text: 'pointillism' },
        { id: 'b', text: 'impressionism' },
        { id: 'c', text: 'cubism' }
      ]
    },
    {
      id: 3,
      text: "Who painted the famous 'Starry Night'?",
      category: "Famous artworks",
      answers: [
        { id: 'a', text: 'Pablo Picasso' },
        { id: 'b', text: 'Vincent van Gogh' },
        { id: 'c', text: 'Claude Monet' }
      ]
    },
    {
      id: 4,
      text: "Which art movement emphasized geometric shapes?",
      category: "Art movements",
      answers: [
        { id: 'a', text: 'romanticism' },
        { id: 'b', text: 'cubism' },
        { id: 'c', text: 'baroque' }
      ]
    }
  ];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      } else {
        // Quiz completed - could navigate to results page
        console.log('Quiz completed!');
      }
    }, 500);
  };

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer('');
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              className="p-1" 
              onClick={handleBackClick}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className={`w-5 h-5 ${currentQuestion === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
            <span className="text-sm font-medium text-gray-600">
              {String(currentQuestion + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
            </span>
          </div>
          
          {/* Progress Bar */}
          <Progress value={progressValue} className="h-1 mb-8" />
          
          {/* Question */}
          <h2 className="text-2xl font-light text-gray-900 mb-6 leading-tight">
            {currentQuestionData.text.split(' ').map((word, index) => (
              word === 'artist' || word === 'technique' || word === 'painted' || word === 'movement' ? (
                <span key={index} className="font-semibold">{word} </span>
              ) : (
                <span key={index}>{word} </span>
              )
            ))}
          </h2>
          
          {/* Category Tag */}
          <p className="text-sm text-gray-500 mb-8">{currentQuestionData.category}</p>
        </div>
        
        {/* Answer Section */}
        <div className="bg-blue-600 px-6 py-8 space-y-3">
          {currentQuestionData.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerSelect(answer.id)}
              className={`w-full text-left px-4 py-3 rounded-full transition-all duration-200 ${
                selectedAnswer === answer.id
                  ? 'bg-blue-400 text-white'
                  : 'text-white hover:bg-blue-500'
              }`}
            >
              <span className="font-medium">{answer.id}.</span> {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
