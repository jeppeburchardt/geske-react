import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuizContainer from './containers/quiz';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <QuizContainer />
      </Provider>
    );
  }
}

export default App;
