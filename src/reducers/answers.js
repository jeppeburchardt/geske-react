const initialState = {};

const answers = (state = { ...initialState }, action) => {
  console.log(action);
  switch (action.type) {
    case 'STORE_ANSWER':
      return {
        ...state,
        [action.payload.questionId]: action.payload.optionId,
      };
    case 'RESTART_QUIZ':
      return { };
    default:
      return state;
  }
};

export default answers;
