import isQuizStarted from './isquizstarted';

it('should return false when no answers are given', () => {
  const state = { answers: {} };
  const result = isQuizStarted(state);
  expect(result).toBe(false);
});

it('should return true when one or more answers are given', () => {
  const state = { answers: { '1': '12' } };
  const result = isQuizStarted(state);
  expect(result).toBe(true);
});
