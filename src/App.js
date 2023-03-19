import React, { useEffect, useState } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.colorOne},
    ${(props) => props.colorTwo}
  );
  background-size: 200%;
  color: ${(props) => props.textColor};
`;

const App = () => {
  const initialState = {
    foodList: [],
    showUserSettings: false,
    userSettings: { RIC: 13, sensibilidad: 50 },
    appSettings: {
      colorOne: "dodgerblue",
      colorTwo: "mediumseagreen",
      textColor: "rgba(255, 255, 255, 0.785)",
    },
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
    const response = await axios.get(`${apiBaseUrl}/getFoods.php`);
    setState({ ...state, foodList: response.data });
  };

  const changeColorOne = (colorOne, colorTwo) => {
    console.log("Color 1: ", colorOne);
    console.log("Color 2: ", colorTwo);

    setState({
      ...state,
      appSettings: {
        ...state.appSettings,
        colorOne: colorOne,
        colorTwo: colorTwo,
      },
    });
  };

  return (
    <AppContainer
      className="flex-column center main-container"
      colorOne={state.appSettings.colorOne}
      colorTwo={state.appSettings.colorTwo}
      textColor={state.appSettings.textColor}
    >
      <Navbar
        toggleUserSettings={() => {
          setState((prevstate) => ({
            ...state,
            showUserSettings: !prevstate.showUserSettings,
          }));
        }}
      />
      <Glucose
        show={state.showUserSettings}
        user={state.userSettings}
        setTheme={changeColorOne}
      />
      <FoodInput foods={state.foodList} />
      <Footer />
    </AppContainer>
  );
};

export default App;
