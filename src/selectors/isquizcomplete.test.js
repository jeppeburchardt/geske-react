import isQuizComplete from './isquizcomplete';

it('should return true when all questions are answered', () => {
  const state = {
    questions: [
      { id: 1, options: [ { id: 11 }, { id: 12 } ] },
      { id: 2, options: [ { id: 21 }, { id: 22 } ] },
      { id: 3, options: [ { id: 31 }, { id: 32 } ] },
    ],
    answers: [
      { questionId: 1, optionId: 22 },
      { questionId: 2, optionId: 21 },
      { questionId: 3, optionId: 31 },
    ],
  };
  const result = isQuizComplete(state);

  expect(result).toBe(true);
});

it('should return false when some questions are not answered', () => {
  const state = {
    questions: [
      { id: 1, options: [ { id: 11 }, { id: 12 } ] },
      { id: 2, options: [ { id: 21 }, { id: 22 } ] },
      { id: 3, options: [ { id: 31 }, { id: 32 } ] },
    ],
    answers: [
      { questionId: 1, optionId: 22 },
    ],
  };
  const result = isQuizComplete(state);

  expect(result).toBe(false);
});

it('should return false when no questions are not answered', () => {
  const state = {
    questions: [
      { id: 1, options: [ { id: 11 }, { id: 12 } ] },
      { id: 2, options: [ { id: 21 }, { id: 22 } ] },
      { id: 3, options: [ { id: 31 }, { id: 32 } ] },
    ],
    answers: [],
  };
  const result = isQuizComplete(state);

  expect(result).toBe(false);
});
