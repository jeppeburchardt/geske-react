const initialState = [
  {
    id: 1,
    text: 'What is React?',
    options: [
      { text: 'React is an imperative framework for managing ajax calls', id: 12 },
      { text: 'React is a declarative library for building user interfaces.', correct: true, id: 13 },
      { text: 'It is a predictable state container for JavaScript apps', id: 11 },
    ],
  },
  {
    id: 2,
    text: 'What is the simplest way to define a react component?',
    options: [
      { text: 'A JavaScript function', id: 21, correct: true },
      { text: 'es6 class extending React.Component', id: 22 },
      { text: 'With React.createClass function', id: 23 },
    ],
  },
  {
    id: 3,
    text: 'What is the recommended way to reuse code between components',
    options: [
      { text: 'Composition', id: 31, correct: true },
      { text: 'Inheritance', id: 32 }
    ],
  },
  {
    id: 4,
    text: 'What is “React Fiber”?',
    options: [
      { text: 'A lightweight version of react', id: 41 },
      { text: 'The reconciliation engine in React 16', id: 42, correct: true },
      { text: 'A popular newsletter about React', id: 43 },
    ],
  },
];

export default () => (initialState);
