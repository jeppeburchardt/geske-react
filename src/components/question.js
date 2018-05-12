import React from 'react';

const Question = ({ question, onAnswer }) => question ? (
  <div>
    <div>{question.text}</div>
    <ul>
      {question.options.map(option => (
        <div key={option.id}>
          <button onClick={() => onAnswer(question.id, option.id)}>
            {option.text}
          </button>
        </div>
      ))}
    </ul>
  </div>
) : null;

export default Question;
