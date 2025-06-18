
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const QuizCard = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('a');

  const answers = [
    { id: 'a', text: 'combination of oil paint' },
    { id: 'b', text: 'travel around the world' },
    { id: 'c', text: 'studied behavior' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-600">01 / 04</span>
          </div>
          
          {/* Progress Bar */}
          <Progress value={25} className="h-1 mb-8" />
          
          {/* Question */}
          <h2 className="text-2xl font-light text-gray-900 mb-6 leading-tight">
            Which <span className="font-semibold">artist</span><br />
            was known for<br />
            drip paintings?
          </h2>
          
          {/* Category Tag */}
          <p className="text-sm text-gray-500 mb-8">History of art</p>
        </div>
        
        {/* Answer Section */}
        <div className="bg-blue-600 px-6 py-8 space-y-3">
          {answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => setSelectedAnswer(answer.id)}
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
