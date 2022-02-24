import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({ content, username, isOwn }) => {
  const cssClass = classNames('message', {
    'message--own': isOwn,
  });

  return (
    <div className={cssClass}>
      <div className="message-author">{username}</div>
      <div className="message-content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isOwn: PropTypes.bool.isRequired,
};

export default Message;