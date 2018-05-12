import { connect } from 'react-redux';
import isQuizComplete from '../selectors/isquizcomplete';
import nextQuestion from '../selectors/nextquestion';
import result from '../selectors/result';
import answer from '../actions/answer';
import restart from '../actions/restart';
import QuizComponent from '../components/quiz';

const mapStateToProps = state => ({
  isQuizComplete: isQuizComplete(state),
  question: nextQuestion(state),
  result: result(state),
  totalQuestions: state.questions.length,
});

const mapDispatchToProps = dispatch => ({
  onAnswer: (questionId, optionId) => dispatch(answer(questionId, optionId)),
  onRestart: () => dispatch(restart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizComponent);
