import nextQuestion from './nextquestion';

it('returns the next question', () => {
  const state = {
    questions: [
      { id: '1', options: [ { id: '11' }, { id: '12' } ] },
      { id: '2', options: [ { id: '21' }, { id: '22' } ] },
      { id: '3', options: [ { id: '31' }, { id: '32' } ] },
    ],
    answers: { 1: 22 },
  };
  const next = nextQuestion(state);
  expect(next).toEqual({ id: '2', options: [ { id: '21' }, { id: '22' } ] });
});
