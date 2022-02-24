import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import chatReducer from "../reducers/chatReducer";

import logMiddleware from "../middleware/logMiddleware";
import authMiddleware from "../middleware/authMiddleware";

const enhancer = composeWithDevTools(applyMiddleware(logMiddleware, authMiddleware));

const store = createStore(
  // reducer
  chatReducer,
  // enhancer
  enhancer
);

export default store;
