import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import chatReducer from '../reducers/chatReducer';

const store = createStore(
  // reducer
  chatReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;