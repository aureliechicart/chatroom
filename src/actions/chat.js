// === action types
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';

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