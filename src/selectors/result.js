export default state => state.answers.reduce(
  (result, answer) => {
    const { questionId, optionId } = answer;
    const isCorrect = state.questions.find(
      q => q.id === questionId
    ).options.find(
      o => o.id === optionId
    ).correct;

    return result + (isCorrect ? 1 : 0);
  },
  0
);
