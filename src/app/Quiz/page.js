'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';

const PageQuiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className='bg-[#2C3361] min-h-screen text-white pt-6 sm:px-80 px-8'>
      <h1 className="sm:text-3xl text-xl font-bold text-white text-center mt-6">Quiz Page</h1>
      <div>
        <h2 className="text-white text-center mt-4">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className='bg-white sm:p-4 p-6 mt-8 rounded'>
            <h3 className='text-black text-sm sm:text-lg'>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
               <li
               key={idx}
               onClick={() => onAnswerSelected(answer, idx)}
               className={`${
                 selectedAnswerIndex === idx ? 'text-white bg-[#AD88E7]' : 'bg-[#d8d8d8]'
               } text-black list-none cursor-pointer my-2 px-4 py-2 border text- border-solid`}
             >
               <span>{answer}</span>
             </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className='w-full px-4 py-2 mt-3 text-base rounded bg-[#AD88E7] text-white'>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='bg-[#4938A0] text-white w-full px-4 py-2 mt-3'>
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className='quiz-container'>
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageQuiz;