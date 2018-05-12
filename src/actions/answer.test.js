import answer from './answer';

it('should create an answer action', () => {
  const result = answer('1', '2');
  expect(result).toEqual({
    type: 'STORE_ANSWER',
    payload: {
      questionId: '1',
      optionId: '2',
    },
  })
});
