import React, { useEffect } from "react";
import PropTypes from "prop-types";

// == Import
import Form from "../../containers/Form";
import Messages from "../../containers/Messages/";
import Settings from "../../containers/Settings/";

import "./styles.scss";

const Chatroom = ({ initWebsocket, nickname }) => {
  useEffect(() => {
    initWebsocket();
  }, []);

  return (
    <div className="chatroom">
      <Messages />
      {nickname !== null && <Form />}
      <Settings />
    </div>
  );
};

Chatroom.propTypes = {
  initWebsocket: PropTypes.func.isRequired,
  nickname: PropTypes.string,
};

Chatroom.defaultProps = {
  nickname: "",
};

export default Chatroom;
