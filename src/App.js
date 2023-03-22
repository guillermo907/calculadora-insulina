import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext.js";

import "./styles/global.css";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );
  background-size: 200%;
  color: ${(props) => (props.textColor === "dark" ? "black" : "white")};

  img {
    filter: ${(props) =>
      props.logoColorMode === "light" ? "invert(0.9)" : "none"};
  }
`;

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const initialState = {
    foodList: [],
    showUserSettings: false,
    userSettings: { RIC: 13, sensibilidad: 50 },
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    let apiBaseUrl = "";
    if (process.env.NODE_ENV !== "development") {
      apiBaseUrl = "https://foodlistapi.000webhostapp.com";
    } else {
      apiBaseUrl = "http://localhost/foods-api";
      apiBaseUrl = "https://foodlistapi.000webhostapp.com";
    }
    const response = await axios.get(`${apiBaseUrl}/models/getFoods.php`);
    setState({ ...state, foodList: response.data });
  };

  const changeColor = (colorOne, colorTwo, textColor, logoColorMode) => {
    setTheme({
      ...theme,
      colorOne: colorOne,
      colorTwo: colorTwo,
      textColor: textColor,
      logoColorMode: logoColorMode,
    });
  };

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <AppContainer
        className="flex-column center main-container"
        colorOne={theme.colorOne}
        colorTwo={theme.colorTwo}
        textColor={theme.textColor}
        logoColorMode={theme.logoColorMode}
      >
        <Navbar
          toggleUserSettings={() => {
            setState((prevstate) => ({
              ...state,
              showUserSettings: !prevstate.showUserSettings,
            }));
          }}
        />
        {state.showUserSettings && <Glucose user={state.userSettings} />}
        {state.showUserSettings && (
          <Settings setState={changeColor} initialColorState={theme} />
        )}
        <FoodInput foods={state.foodList} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
