import axios from 'axios';

import { SUBMIT_LOGIN, connectUser, displayError } from '../actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post('/login', {
        email: store.getState().email,
        password: store.getState().password,
      })
        .then((response) => {
          const saveAction = connectUser(response.data.pseudo);
          store.dispatch(saveAction);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(displayError(error.message));
        });

      break;

    default:
  }

  next(action);
};

export default authMiddleware;