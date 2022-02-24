const initialState = {
  messages: [
    {
      id: 1,
      username: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      username: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      username: 'Super Chat',
      content: 'Stp',
    },
  ],
  inputMessage: 'test',
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default chatReducer;