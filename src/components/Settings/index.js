import React from 'react';

import Field from '../Field/';

import './settings.scss';

const Settings = () => (
  <div className="settings">
    <button className="settings-toggle" type="button">+</button>
    <form className="settings-form">
      <Field
        identifier="email"
        placeholder="michel@michel.michmich"
        label="Adresse e-mail"
        changeField={(identifier, newValue) => {
          console.log(`Nouvelle valeur '${newValue}' pour le champ '${identifier}'`);
        }}
      />
      <Field
        identifier="password"
        placeholder=""
        label="Mot de passe"
        type="password"
        changeField={(identifier, newValue) => {
          console.log(`Nouvelle valeur '${newValue}' pour le champ '${identifier}'`);
        }}
      />
      <button type="submit" className="settings-submit">Envoyer</button>
    </form>
  </div>
);

export default Settings;