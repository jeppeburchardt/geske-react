import { combineReducers } from 'redux';
import answers from './answers';
import questions from './questions';

const root = combineReducers({
  answers,
  questions,
});

export default root;
