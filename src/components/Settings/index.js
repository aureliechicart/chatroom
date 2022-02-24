import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Field from "../Field/";

import "./settings.scss";

const Settings = ({ open, toggleOpen }) => {
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
        <form className="settings-form">
          <Field
            identifier="email"
            placeholder="michel@michel.michmich"
            label="Adresse e-mail"
            changeField={(identifier, newValue) => {
              console.log(
                `Nouvelle valeur '${newValue}' pour le champ '${identifier}'`
              );
            }}
          />
          <Field
            identifier="password"
            placeholder=""
            label="Mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              console.log(
                `Nouvelle valeur '${newValue}' pour le champ '${identifier}'`
              );
            }}
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
};

export default Settings;
