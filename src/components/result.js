import React from 'react';

const Result = ({ result, totalQuestions, onRestart }) => (
  <div>
    <div>You had {result} out of {totalQuestions} correct answers!</div>
    <div>
      <button onClick={onRestart}>Restart the quiz</button>
    </div>
  </div>
);

export default Result;
