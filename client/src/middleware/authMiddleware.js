import axios from 'axios';

import { SUBMIT_LOGIN } from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post('http://localhost:3001/login', {
        email: store.getState().email,
        password: store.getState().password,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    default:
  }

  next(action);
};

export default authMiddleware;