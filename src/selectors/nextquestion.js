export default state => state.questions.find(
  question => state.answers.map(a => a.questionId).indexOf(question.id) === -1
);
