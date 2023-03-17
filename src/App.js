import React, { useEffect, useState } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import Navbar from "./components/Navbar";
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
    /* const response = await axios.get("https://foodlist.onrender.com/foods", {}); */
    const response = await axios.get(
      "http://localhost/foods-api/getfoods.php",
      {}
    );
    console.log(response.data);
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
    </div>
  );
};

export default App;
