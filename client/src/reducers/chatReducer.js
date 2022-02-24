import {
  UPDATE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  UPDATE_SETTINGS_FIELD,
  CONNECT_USER,
  DISPLAY_ERROR
} from "../actions/chat";

// import { getHighestId } from "../utils";

const initialState = {
  messages: [],
  inputMessage: "",
  settingsOpen: true,
  email: "",
  password: "",
  nickname: '',
  loginError: null
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.newValue,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
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
        [action.identifier]: action.newValue,
      };
    case CONNECT_USER:
      return {
        ...state,
        nickname: action.nickname,
        settingsOpen: false
      };
  
      case DISPLAY_ERROR:
        return {
          ...state,
          loginError: action.errorMessage
        };
    default:
      return state;
  }
}

export default chatReducer;
