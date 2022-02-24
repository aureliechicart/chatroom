// == Import
import Form from '../../containers/Form';
import Messages from '../../containers/Messages/';
import Settings from '../../components/Settings/';

import './styles.scss';

const Chatroom = () => {
  return (
    <div className="chatroom">
    <Messages />
      <Form />
      <Settings />
  </div>
  );
}

export default Chatroom;
