export default state => state.questions.find(
  question => Object.keys(state.answers).indexOf(question.id) === -1
);
