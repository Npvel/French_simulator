import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const FrenchDialogueExercise = () => {
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  
  const correctAnswers = {
    // Left dialogue
    d1p1: 'êtes',
    d1p2: 'Je',
    d1p3: 'suis',
    d1p4: 'êtes',
    d1p5: 'Je',
    d1p6: 'je',
    d1p7: 'suis',
    // Right dialogue
    d2p1: 'êtes',
    d2p2: 'êtes',
    d2p3: 'je',
    d2p4: 'suis',
    d2p5: 'vous',
    d2p6: 'êtes'
  };

  const handleInputChange = (id, value) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      const isCorrect = event.target.value.toLowerCase() === correctAnswers[id].toLowerCase();
      setFeedback(prev => ({
        ...prev,
        [id]: isCorrect
      }));
    }
  };

  const getInputClassName = (id) => {
    const baseClasses = "border-b-2 bg-transparent px-1 text-blue-600 italic focus:outline-none";
    if (feedback[id] === undefined) {
      return `${baseClasses} border-black`;
    }
    return `${baseClasses} ${feedback[id] ? 'border-green-500' : 'border-red-500'}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff0da' }}>
      <div className="p-8">
        <div className="flex justify-end mb-12">
          <div 
            className="bg-blue-900 text-white px-8 py-4 rounded-full" 
            style={{ letterSpacing: '0.1em', display: 'inline-block' }}
          >
            <h1 className="text-xl font-bold">E X E R C I C E S</h1>
          </div>
        </div>

        <div style={{ maxWidth: '82.5rem' }} className="mx-auto">
          <h2 className="text-xl font-bold mb-8 text-black text-center leading-8">
            1. « Je suis » ou « Vous êtes ». Complétez. Créez d'autres dialogues.
          </h2>
          
          <div className="grid grid-cols-2 gap-8 lg:gap-16 border rounded-lg p-8 relative">
            {/* Vertical divider line */}
            <div className="absolute top-8 bottom-8 left-1/2 w-px bg-gray-300 transform -translate-x-1/2" />
            
            <h3 className="col-span-2 font-bold text-black mb-4 text-center">Présentations</h3>
            
            {/* Left column */}
            <div className="space-y-8 flex flex-col pr-4">
              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">- Vous</span>
                <input
                  type="text"
                  value={answers.d1p1 || ''}
                  onChange={(e) => handleInputChange('d1p1', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p1')}
                  className={`${getInputClassName('d1p1')} w-24`}
                />
                <span className="text-black text-lg leading-6">d'où?</span>
                {feedback.d1p1 !== undefined && (
                  feedback.d1p1 
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">-</span>
                <input
                  type="text"
                  value={answers.d1p2 || ''}
                  onChange={(e) => handleInputChange('d1p2', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p2')}
                  className={`${getInputClassName('d1p2')} w-16`}
                />
                <input
                  type="text"
                  value={answers.d1p3 || ''}
                  onChange={(e) => handleInputChange('d1p3', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p3')}
                  className={`${getInputClassName('d1p3')} w-24`}
                />
                <span className="text-black text-lg leading-6">anglais. Je suis de Londres.</span>
                {feedback.d1p2 !== undefined && feedback.d1p3 !== undefined && (
                  feedback.d1p2 && feedback.d1p3
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">Et vous, vous</span>
                <input
                  type="text"
                  value={answers.d1p4 || ''}
                  onChange={(e) => handleInputChange('d1p4', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p4')}
                  className={`${getInputClassName('d1p4')} w-24`}
                />
                <span className="text-black text-lg leading-6">d'où?</span>
                {feedback.d1p4 !== undefined && (
                  feedback.d1p4 
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">-</span>
                <input
                  type="text"
                  value={answers.d1p5 || ''}
                  onChange={(e) => handleInputChange('d1p5', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p5')}
                  className={`${getInputClassName('d1p5')} w-16`}
                />
                <span className="text-black text-lg leading-6">suis d'Athènes,</span>
                <input
                  type="text"
                  value={answers.d1p6 || ''}
                  onChange={(e) => handleInputChange('d1p6', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p6')}
                  className={`${getInputClassName('d1p6')} w-16`}
                />
                <input
                  type="text"
                  value={answers.d1p7 || ''}
                  onChange={(e) => handleInputChange('d1p7', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd1p7')}
                  className={`${getInputClassName('d1p7')} w-24`}
                />
                <span className="text-black text-lg leading-6">grec.</span>
                {feedback.d1p5 !== undefined && feedback.d1p6 !== undefined && feedback.d1p7 !== undefined && (
                  feedback.d1p5 && feedback.d1p6 && feedback.d1p7
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8 flex flex-col pl-4">
              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">- Vous</span>
                <input
                  type="text"
                  value={answers.d2p1 || ''}
                  onChange={(e) => handleInputChange('d2p1', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p1')}
                  className={`${getInputClassName('d2p1')} w-24`}
                />
                <span className="text-black text-lg leading-6">marié?</span>
                {feedback.d2p1 !== undefined && (
                  feedback.d2p1 
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">- Non,</span>
                <input
                  type="text"
                  value={answers.d2p2 || ''}
                  onChange={(e) => handleInputChange('d2p2', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p2')}
                  className={`${getInputClassName('d2p2')} w-24`}
                />
                <span className="text-black text-lg leading-6">célibataire.</span>
                {feedback.d2p2 !== undefined && (
                  feedback.d2p2
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">Et vous,</span>
                <input
                  type="text"
                  value={answers.d2p3 || ''}
                  onChange={(e) => handleInputChange('d2p3', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p3')}
                  className={`${getInputClassName('d2p3')} w-16`}
                />
                <input
                  type="text"
                  value={answers.d2p4 || ''}
                  onChange={(e) => handleInputChange('d2p4', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p4')}
                  className={`${getInputClassName('d2p4')} w-24`}
                />
                <span className="text-black text-lg leading-6">marié?</span>
                {feedback.d2p3 !== undefined && feedback.d2p4 !== undefined && (
                  feedback.d2p3 && feedback.d2p4
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-black text-lg leading-6">- Oui,</span>
                <input
                  type="text"
                  value={answers.d2p5 || ''}
                  onChange={(e) => handleInputChange('d2p5', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p5')}
                  className={`${getInputClassName('d2p5')} w-24`}
                />
                <input
                  type="text"
                  value={answers.d2p6 || ''}
                  onChange={(e) => handleInputChange('d2p6', e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'd2p6')}
                  className={`${getInputClassName('d2p6')} w-24`}
                />
                <span className="text-black text-lg leading-6">marié.</span>
                {feedback.d2p5 !== undefined && feedback.d2p6 !== undefined && (
                  feedback.d2p5 && feedback.d2p6
                    ? <Check className="text-green-500 ml-2" size={20} />
                    : <X className="text-red-500 ml-2" size={20} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchDialogueExercise;