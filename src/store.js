import { createStore } from 'redux';
import root from './reducers/root';

const store = createStore(root);

global.store = store;

export default store;
