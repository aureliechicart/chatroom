import {
  UPDATE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  UPDATE_SETTINGS_FIELD,
} from "../actions/chat";

import { getHighestId } from "../utils";

const initialState = {
  messages: [],
  inputMessage: "",
  settingsOpen: true,
  email: "",
  password: "",
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.newValue,
      };
    case ADD_MESSAGE:
      const nextId = getHighestId(state.messages) + 1;
      // for now, we hard-code the username
      const newMessage = {
        id: nextId,
        username: "Super Chat",
        content: state.inputMessage,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        // we clear the input
        inputMessage: "",
      };
    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
      case UPDATE_SETTINGS_FIELD:
        return {
          ...state,
          [action.identifier]: action.newValue
        };
    default:
      return state;
  }
}

export default chatReducer;