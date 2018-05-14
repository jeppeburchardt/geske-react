import result from './result';

it('should correct number of answers', () => {
  const state = {
    questions: [
      { id: 1, options: [ { id: 11, correct: true }, { id: 12 } ] },
      { id: 2, options: [ { id: 21 }, { id: 22, correct: true } ] },
      { id: 3, options: [ { id: 31 }, { id: 32, correct: true } ] },
    ],
    answers: [
      { questionId: 1, optionId: 11 },
      { questionId: 2, optionId: 21 },
      { questionId: 3, optionId: 31 },
    ],
  };
  const correct = result(state);
  expect(correct).toBe(1);
});
