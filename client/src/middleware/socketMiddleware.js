import { CONNECT_WEBSOCKET, CONNECT_USER } from "../actions/chat";

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET:
      // proxy defined in package.json to redirect any unknow requests to our API server
      socket = window.io("/");
      console.log(socket);
      console.log("websocket créé !");
      break;

    case CONNECT_USER:
      socket.on("send_message", (message) => {
        console.log("nouveau message :", message);
      });
      break;

    default:
  }

  next(action);
};

export default socketMiddleware;
