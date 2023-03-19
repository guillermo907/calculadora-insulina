import styled from "styled-components";
import { useState } from "react";
const SettingsCont = styled.div`
  background: linear-gradient(
    45deg,
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );
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
`;

const Settings = ({ setTheme }) => {
  const initialColorState = { colorOne: "", colorTwo: "" };
  const [colors, setColors] = useState(initialColorState);

  const handleColorChange = () => {
    console.log("chandle change called");
    setTheme(colors.colorOne, colors.colorTwo);
  };

  return (
    <SettingsCont colorOne={colors.colorOne} colorTwo={colors.colorTwo}>
      <div className="theme-field">
        <div class="color-pickers">
          Color one
          <div>
            <input
              type="color"
              name="color1"
              onChange={(e) => {
                setColors({ ...colors, colorOne: e.target.value });
              }}
            />
          </div>
          <br />
          Color two
          <div>
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
      <p>You must select both colors to see preview and select..</p>
    </SettingsCont>
  );
};

export default Settings;
