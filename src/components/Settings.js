import styled from "styled-components";
import { useState, useEffect } from "react";
import appLogo from "../resources/app-logo2.png";

const SettingsCont = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );
  background-size: 200%;
  color: ${(props) => (props.textColor === "dark" ? "black" : "white")};
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px 15px 10px 15px;
  margin: 5px;
  border-radius: 7px;

  .theme-field {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;
  }
  .theme-field input {
    padding: initial;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid white;
  }
  .preset-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${(props) =>
      props.textColor === "dark"
        ? "rgba(255, 255, 255, 0.559)"
        : "rgba(0, 0, 0, 0.559)"};
    padding: 15px;
    margin: 15px;
  }
  .presets {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
  span.preset {
    border: 1px solid white;
    cursor: pointer;
    height: 30px;
    width: 30px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  button {
    padding: 10px 12px;
    background: rgb(20, 200, 113);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }
  p {
    position: relative;
    bottom: 0;
    margin: 0;
    margin-top: 2rem;
    opacity: 0.8;
    font-style: italic;
  }
  .color-pickers {
    display: flex;
    flex-direction: column;
  }
  #textColor {
    padding: 5px;
    border-radius: 7px;
    padding: 5px 5px;
    border: none;
  }
  .color-pickers {
    display: flex;
    gap: 1rem;
  }
  img {
    filter: ${(props) =>
      props.logoColorMode === "light" ? "invert(0.9)" : "none"} !important;
  }
  .theme-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  h3 {
    text-align: center;
  }
  .customize-section {
    border-top: 1px solid;
    padding-top: 15px;
    width: 100%;
  }
`;

const Settings = ({ setState, initialColorState }) => {
  const [colors, setColors] = useState({ initialColorState });
  const [showCustomize, toggleShowcustomize] = useState(false);

  useEffect(() => {
    console.log(initialColorState);
    setColors(initialColorState);
  }, []);

  const handleColorChange = () => {
    setState(
      colors.colorOne,
      colors.colorTwo,
      colors.textColor,
      colors.logoColorMode
    );
  };

  return (
    <SettingsCont
      colorOne={colors.colorOne}
      colorTwo={colors.colorTwo}
      textColor={colors.textColor}
      logoColorMode={colors.logoColorMode}
    >
      <h2>Theme Settings</h2>
      <div className="preset-section">
        <h3>Select a preset</h3>
        <div className="presets">
          <span
            name="theme-1"
            className="preset box-shadow"
            style={{
              background: "linear-gradient(145deg, #005A9C, #3cb371)",
            }}
            value={colors.colorOne}
            onClick={(e) => {
              setColors({
                ...colors,
                colorOne: "#005A9C",
                colorTwo: "#3cb371",
                textColor: "light",
                logoColorMode: "dark",
              });
            }}
          />
          <span
            name="theme-2"
            className="preset box-shadow"
            style={{
              background:
                "linear-gradient(145deg, rgb(24, 26, 27), rgb(97, 78, 115))",
            }}
            value={colors.colorOne}
            onClick={(e) => {
              setColors({
                ...colors,
                colorOne: "#181a1b",
                colorTwo: "#614e73",
                textColor: "light",
                logoColorMode: "light",
              });
            }}
          />
          <span
            name="theme-3"
            className="preset box-shadow"
            style={{
              background: "linear-gradient(145deg, dodgerblue, blueviolet)",
            }}
            value={colors.colorOne}
            onClick={(e) => {
              setColors({
                ...colors,
                colorOne: "#005A9C",
                colorTwo: "#8a2be2",
                textColor: "light",
                logoColorMode: "dark",
              });
              handleColorChange();
            }}
          />
          <span
            name="theme-4"
            className="preset box-shadow"
            style={{
              background:
                "linear-gradient(145deg, rgb(215, 125, 86), blueviolet)",
            }}
            value={colors.colorOne}
            onClick={(e) => {
              setColors({
                ...colors,
                colorOne: "#d77d56",
                colorTwo: "#8a2be2",
                textColor: "dark",
                logoColorMode: "dark",
              });
            }}
          />
          <span
            name="theme-5"
            className="preset box-shadow"
            style={{
              background: "linear-gradient(145deg, #f857a6, #ff5858)",
            }}
            value={colors.colorOne}
            onClick={(e) => {
              setColors({
                ...colors,
                colorOne: "#d77d56",
                colorTwo: "#d34577",
                textColor: "white",
                logoColorMode: "dark",
              });
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
        Apply
      </button>
      <span
        className="toggle"
        onClick={(e) => toggleShowcustomize(!showCustomize)}
      >
        {showCustomize ? "hide" : "more"}
      </span>
      {showCustomize && (
        <div className="customize-section">
          <h3>Customize</h3>
          <br />
          <div className="theme-field">
            <div className="color-pickers">
              <div className="option-field">
                <label>Color one</label>
                <input
                  type="color"
                  name="color1"
                  className="box-shadow"
                  style={{ background: colors.colorOne }}
                  value={colors.colorOne}
                  onChange={(e) => {
                    setColors({ ...colors, colorOne: e.target.value });
                  }}
                />
              </div>
              <div className="option-field">
                <label>Color two</label>
                <input
                  type="color"
                  name="color2"
                  className="box-shadow"
                  style={{ background: colors.colorTwo }}
                  value={colors.colorTwo}
                  onChange={(e) => {
                    setColors({ ...colors, colorTwo: e.target.value });
                  }}
                />
              </div>
              <div className="option-field">
                <label htmlFor="textColor">Text Color:</label>
                <select
                  id="textColor"
                  name="textColor"
                  value={colors.textColor}
                  onChange={(e) => {
                    setColors({ ...colors, textColor: e.target.value });
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>

              <div className="option-field">
                <label htmlFor="textColor">logo Color:</label>
                <select
                  id="textColor"
                  name="textColor"
                  value={colors.logoColorMode}
                  onChange={(e) => {
                    setColors({ ...colors, logoColorMode: e.target.value });
                  }}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>
            <div className="theme-right">
              <img className="sample-logo" src={appLogo} />
            </div>
          </div>
        </div>
      )}
    </SettingsCont>
  );
};

export default Settings;
