import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuizContainer from './containers/quiz';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 className="app-top">Geske's react quiz!</h1>
          <QuizContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
