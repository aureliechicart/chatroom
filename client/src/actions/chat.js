// === action types
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const CONNECT_USER = 'CONNECT_USER';
export const DISPLAY_ERROR = 'DISPLAY_ERROR';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';

// === action creators
export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  newValue: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});

export const updateSettingsField = (identifier, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  identifier: identifier,
  newValue
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (nickname) => ({
  type: CONNECT_USER,
  nickname: nickname,
});

export const displayError = (errorMessage) => ({
  type: DISPLAY_ERROR,
  errorMessage: errorMessage,
});

export const connectWebsocket = () => ({
  type: CONNECT_WEBSOCKET,
});