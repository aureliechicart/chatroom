import { CONNECT_WEBSOCKET } from '../actions/chat';

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      // proxy defined in package.json to redirect any unknow requests to our API server
      const socket = window.io('/');
      console.log('websocket créé !');
      break;
    }

    default:
  }

  next(action);
};

export default socketMiddleware;