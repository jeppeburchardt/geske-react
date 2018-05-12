import restart from './restart';

it('should create a restart action', () => {
  const result = restart();
  expect(result).toEqual({
    type: 'RESTART_QUIZ',
  })
});
