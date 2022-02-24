import React, { useEffect } from "react";
import PropTypes from "prop-types";

// == Import
import Form from "../../containers/Form";
import Messages from "../../containers/Messages/";
import Settings from "../../containers/Settings/";

import "./styles.scss";

const Chatroom = ({ initWebsocket }) => {
  useEffect(() => {
    initWebsocket();
  }, []);

  return (
    <div className="chatroom">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

Chatroom.propTypes = {
  initWebsocket: PropTypes.func.isRequired,
};

export default Chatroom;
