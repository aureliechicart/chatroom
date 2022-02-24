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
}) => {
  const cssClass = classNames("settings-toggle", {
    "settings-toggle--open": open,
  });

  return (
    <div className="settings">
      <button
        className={cssClass}
        type="button"
        onClick={() => {
          toggleOpen();
        }}>
        +
      </button>
      {open && (
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
          <button type="submit" className="settings-submit">
            Envoyer
          </button>
        </form>
      )}
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
};

export default Settings;