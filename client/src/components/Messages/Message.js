import React from 'react';
import PropTypes from 'prop-types';

const Message = ({content, username}) => (
  <div className="message">
    <div className="message-author">{username}</div>
    <div className="message-content">{content}</div>
  </div>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Message;