import { UPDATE_INPUT_MESSAGE, ADD_MESSAGE } from "../actions/chat";

const initialState = {
  messages: [
    {
      id: 1,
      username: "Super Chat",
      content: "Salut ça va ?",
    },
    {
      id: 2,
      username: "Super Chat",
      content: "T'as pas des super croquettes ?",
    },
    {
      id: 3,
      username: "Super Chat",
      content: "Stp",
    },
  ],
  inputMessage: "",
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.newValue,
      };
    case ADD_MESSAGE:
      // for now, we hard-code an id and a username
      const newMessage = {
        id: 145,
        username: 'Super Chat',
        content: state.inputMessage
      };
        return {
          ...state,
          messages: [
            ...state.messages,
            newMessage
          ],
          // we clear the input
          inputMessage: ''
        };
    default:
      return state;
  }
}

export default chatReducer;
