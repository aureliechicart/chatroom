import React from 'react';
// react-feather : light-weight library of icnons as React components
import { Send } from 'react-feather';

import './form.scss';

const Form = () => (
  <form className="form">
    <input type="text" className="form-input" placeholder="Saisissez votre message..." />
    <button type="submit" className="form-submit">
      <Send size={46} />
    </button>
  </form>
);

export default Form;