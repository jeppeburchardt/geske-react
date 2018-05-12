import answers from './answers';

it('store new answers', () => {
  const previousState = { 1: 11 };
  const action = { type: 'STORE_ANSWER', payload: { questionId: 2, optionId: 21 } };
  const nextState = { 1: 11, 2: 21 };
  const result = answers(previousState, action);

  expect(result).toEqual(nextState);
});

it('changes a previously answered question', () => {
  const previousState = { 1: 11, 2: 22 };
  const action = { type: 'STORE_ANSWER', payload: { questionId: 2, optionId: 21 } };
  const nextState = { 1: 11, 2: 21 };
  const result = answers(previousState, action);

  expect(result).toEqual(nextState);
});

it('removes all answers when quiz is reset', () => {
  const previousState = { 1: 11 };
  const action = { type: 'RESTART_QUIZ' };
  const nextState = { };
  const result = answers(previousState, action);

  expect(result).toEqual(nextState);
});
