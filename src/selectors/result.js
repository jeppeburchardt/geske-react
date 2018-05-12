export default state => Object.keys(state.answers).reduce(
  (result, answer) => {
    const option = state.answers[answer];
    const isCorrect = state.questions.find(
      q => q.id === answer
    ).options.find(
      o => o.id === option
    ).correct;

    return result + (isCorrect ? 1 : 0);
  },
  0
);
