import React from 'react';
import Question from './question';
import Result from './result';
import './quiz.css';

const Quiz = ({ question, isQuizComplete, totalQuestions, onAnswer, result, onRestart }) => (
  <div className='quiz'>
    {question && (
      <Question
        question={question}
        onAnswer={onAnswer}
      />
    )}
    {isQuizComplete && (
      <Result
        result={result}
        totalQuestions={totalQuestions}
        onRestart={onRestart}
      />
    )}
  </div>
);

export default Quiz;
