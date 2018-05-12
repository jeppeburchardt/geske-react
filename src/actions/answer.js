export default (questionId, optionId) => ({
  type: 'STORE_ANSWER',
  payload: {
    questionId,
    optionId,
  },
});
