const initialState = [
  {
    id: '1',
    text: 'Who\'s the author of Redux?',
    options: [
      { text: 'James', id: '11' },
      { text: 'Serg', id: '12' },
      { text: 'Dan Abramov', correct: true, id: '13' },
    ],
  },
  {
    id: '2',
    text: 'How many roads must a man walk down?',
    options: [
      { text: '1', id: '21' },
      { text: '42', correct: true, id: '22' },
      { text: '100', id: '23' },
    ],
  },
];

export default () => (initialState);
