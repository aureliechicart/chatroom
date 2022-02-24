import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import chatReducer from "../reducers/chatReducer";

import authMiddleware from "../middleware/authMiddleware";

const enhancer = composeWithDevTools(applyMiddleware(authMiddleware));

const store = createStore(
  // reducer
  chatReducer,
  // enhancer
  enhancer
);

export default store;
