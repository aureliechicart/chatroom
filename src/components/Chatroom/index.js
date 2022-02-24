// == Import
import Form from '../../containers/Form';
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
