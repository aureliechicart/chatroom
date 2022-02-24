import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Field from "../Field/";

import "./settings.scss";

const Settings = ({
  open,
  toggleOpen,
  email,
  password,
  updateSettingsField,
  submitLogin,
  loginError
}) => {
  const cssClassButton = classNames('settings-toggle', {
    'settings-toggle--open': open,
  });
  const cssClassDiv = classNames('settings', {
    'settings-open': open,
  });

  return (
    <div className={cssClassDiv}>
      <button
        className={cssClassButton}
        type="button"
        onClick={() => {
          toggleOpen();
        }}>
        +
      </button>
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            submitLogin();
          }}>
          <Field
            identifier="email"
            placeholder="michel@michel.michmich"
            label="Adresse e-mail"
            changeField={(identifier, newValue) => {
              updateSettingsField(identifier, newValue);
            }}
            value={email}
          />
          <Field
            identifier="password"
            placeholder=""
            label="Mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              updateSettingsField(identifier, newValue);
            }}
            value={password}
          />
          { loginError &&
            <p className="login-error">{loginError}</p>}
          <button type="submit" className="settings-submit">
            Envoyer
          </button>
        </form>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateSettingsField: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  loginError: PropTypes.string
};

export default Settings;
