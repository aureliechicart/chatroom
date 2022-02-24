import axios from 'axios';

import { SUBMIT_LOGIN, connectUser, displayError } from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post('http://localhost:3001/login', {
        email: store.getState().email,
        password: store.getState().password,
      })
        .then((response) => {
          console.log(response);
          const saveAction = connectUser(response.data.pseudo);
          store.dispatch(saveAction);
        })
        .catch((error) => {
          store.dispatch(displayError(error.message));
        });

      break;

    default:
  }

  next(action);
};

export default authMiddleware;