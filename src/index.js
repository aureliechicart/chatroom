import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/index";

import "./styles/index.scss";
import Chatroom from "./components/Chatroom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Chatroom />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
