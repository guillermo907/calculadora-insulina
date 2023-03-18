import React, { useEffect, useState } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { foods } from "./resources/foodList";
import "./styles/global.css";

const App = () => {
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

    const response = await axios.get(`${apiBaseUrl}/getFoods.php`);
    setState({ ...state, foodList: response.data });
  };

  return (
    <div className="flex-column center main-container">
      <Navbar
        toggleUserSettings={() => {
          setState((prevstate) => ({
            ...state,
            showUserSettings: !prevstate.showUserSettings,
          }));
        }}
      />
      <Glucose show={state.showUserSettings} user={state.userSettings} />
      <FoodInput foods={state.foodList} />
      <Footer />
    </div>
  );
};

export default App;
