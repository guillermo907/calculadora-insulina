import styled from "styled-components";
import { useState } from "react";

const SettingsCont = styled.div`
  background: linear-gradient(
    45deg,
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );
  color: ${(props) => (props.textColor === "dark" ? "black" : "white")};
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 10px 15px;
  margin: 5px;
  border-radius: 7px;

  .theme-field {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    width: 100%;
  }
  .theme-field > div {
    display: flex;
    gap: 0.5rem;
  }
  .theme-field input {
    padding: initial;
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
`;

const Settings = ({ setTheme }) => {
  const initialColorState = { colorOne: "", colorTwo: "", textColor: "" };
  const [colors, setColors] = useState(initialColorState);

  const handleColorChange = () => {
    setTheme(colors.colorOne, colors.colorTwo, colors.textColor);
  };

  return (
    <SettingsCont
      colorOne={colors.colorOne}
      colorTwo={colors.colorTwo}
      textColor={colors.textColor}
    >
      <div className="theme-field">
        <div className="color-pickers">
          <div className="option-field">
            <label>Color one</label>
            <input
              type="color"
              name="color1"
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
      <p>You must select both colors to see preview and select..</p>
    </SettingsCont>
  );
};

export default Settings;
