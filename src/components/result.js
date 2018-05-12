import React from 'react';
import './result.css';
import Button from './button';

const emoji = (result, totalQuestions) => {
  const score = result / totalQuestions;
  if (score === 1) {
    return '🤩';
  }
  if (score >= 0.75) {
    return '👍';
  }
  if (score > 0) {
    return '🤡';
  }
  return '🙀';
};

const Result = ({ result, totalQuestions, onRestart }) => (
  <div>
    <div className="result-text">You had {result} (out of {totalQuestions}) correct answers!</div>
    <div className="result-emoji">
      {emoji(result, totalQuestions)}
    </div>
    <div>
      <Button onClick={onRestart}>Restart the quiz</Button>
    </div>
  </div>
);

export default Result;
