// == Import
import Form from '../Form';
import Messages from '../../containers/Messages/';

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