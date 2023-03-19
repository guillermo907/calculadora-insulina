import React, { useState } from "react";
import appLogo from "../resources/app-logo2.png";

const Glucose = ({ show, user, state, setTheme }) => {
  const initialColorState = { colorOne: "", colorTwo: "" };
  const [colors, setColors] = useState(initialColorState);

  const handleColorChange = () => {
    console.log("chandle change called");
    setTheme(colors.colorOne, colors.colorTwo);
  };

  return (
    <div className={`glucose-input-container`}>
      <div
        className={`flex-column glucose-input-group  ${
          show ? "showing" : "hidden"
        }`}
      >
        <div className="field">
          <label>Ingrese su nivel de glucosa actual</label>
          <input placeholder="100"></input>
        </div>
        <div className="field">
          <img className="app-logo" src={appLogo} />
        </div>
        <div className="field">
          <label>Ingrese su RIC</label>
          <input placeholder={user.RIC}></input>
        </div>
        <div className="field">
          <label>Ingrese su sensibilidad</label>
          <input placeholder={user.sensibilidad}></input>
        </div>

        <div className="theme-field">
          Color one
          <div>
            <span
              className="span-show"
              style={{ background: colors.colorOne }}
            ></span>
            <input
              type="color"
              name="color1"
              onChange={(e) => {
                setColors({ ...colors, colorOne: e.target.value });
              }}
            />
          </div>
          Color two
          <div>
            <span
              className="span-show two"
              style={{ background: colors.colorTwo }}
            ></span>
            <input
              type="color"
              name="color2"
              onChange={(e) => {
                setColors({ ...colors, colorTwo: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          onClick={handleColorChange}
          className={`box-shadow ${
            colors.colorOne && colors.colorsTwo ? "disabled" : ""
          }`}
        >
          Change theme
        </button>
      </div>
    </div>
  );
};

export default Glucose;
