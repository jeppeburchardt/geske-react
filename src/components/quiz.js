import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Question from './question';
import Result from './result';
import './quiz.css';

const Quiz = ({ question, isQuizComplete, totalQuestions, onAnswer, result, onRestart }) => (
  <div className='quiz'>
    <TransitionGroup>
      {question && (
        <CSSTransition classNames="quiz-slide" timeout={300} in key={question.id}>
          <div className="quiz-slide">
            <Question
              question={question}
              onAnswer={onAnswer}
            />
          </div>
        </CSSTransition>
      )}
      {isQuizComplete && (
        <CSSTransition classNames="quiz-zoom" timeout={300} in key={result}>
          <div className="quiz-zoom">
            <Result
              result={result}
              totalQuestions={totalQuestions}
              onRestart={onRestart}
            />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  </div>
);

export default Quiz;
