import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./messages.scss";
import Message from "../../containers/Messages/Message";

const Messages = ({ messages }) => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.scrollTo({
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
      top: refContainer.current.scrollHeight,
      left: 0,
      // progressive scroll
      behavior: "smooth",
    });
  });
  return (
    <div className="messages" ref={refContainer}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Messages;
