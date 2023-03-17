import React from "react";
import appLogo from "../resources/app-logo2.png";

const Glucose = ({ show }) => {
  return (
    <div className={`glucose-input-container`}>
      <div
        className={`flex-column glucose-input-group disabled ${
          show ? "showing" : "hidden"
        }`}
      >
        <div className="field">
          <label>Ingrese su nivel de glucosa actual</label>
          <input></input>
        </div>
        <div className="field">
          <img class="app-logo" src={appLogo} />
        </div>
        <div className="field">
          <label>Ingrese su RIC</label>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default Glucose;
