import React from "react";
import PropTypes from "prop-types";
// react-feather : light-weight library of icons as React components
import { Send } from "react-feather";

import "./form.scss";

const Form = ({ value, setValue, handleSubmit }) => (
  <form className="form" onSubmit={(event) => {
    event.preventDefault();
    handleSubmit();
  }}>
    <input
      value={value}
      type="text"
      className="form-input"
      placeholder="Saisissez votre message..."
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
    <button type="submit" className="form-submit">
      <Send size={46} />
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
