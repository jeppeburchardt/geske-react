const answers = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ANSWER':
      const { questionId, optionId } = action.payload;
      return [
        ...state.filter(a => a.questionId !== questionId),
        { questionId, optionId },
      ];
    case 'RESTART_QUIZ':
      return [];
    default:
      return state;
  }
};

export default answers;
