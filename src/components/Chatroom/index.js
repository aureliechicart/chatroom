// == Import
import Form from '../Form';
import Messages from '../Messages/index.js';

import './styles.scss';

const Chatroom = () => {
  return (
    <div className="chatroom">
    <Messages />
    <Form />
  </div>
  );
}

export default Chatroom;
