import React from 'react';
import Button from './button';
import './question.css';

const Question = ({ question, onAnswer }) => question ? (
  <div className="question">
    <div className="question-text">{question.text}</div>
    <ul className="question-options">
      {question.options.map(option => (
        <li key={option.id}>
          <Button onClick={() => onAnswer(question.id, option.id)}>
            {option.text}
          </Button>
        </li>
      ))}
    </ul>
  </div>
) : null;

export default Question;
