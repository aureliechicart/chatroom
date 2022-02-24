import React from 'react';
import PropTypes from 'prop-types';

const Message = ({content, username}) => (
  <div className="message">
    <div className="message-author">{username}</div>
    <div className="message-content">{content}</div>
  </div>
);

export default Message;