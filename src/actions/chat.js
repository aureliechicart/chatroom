// === action types
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// === action creators
export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  newValue: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});