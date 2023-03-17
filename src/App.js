import React, { useEffect, useState } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import Navbar from "./components/Navbar";
import { foods } from "./resources/foodList";
import "./styles/global.css";

const App = () => {
  const initialState = { foodList: [] };
  const [state, setState] = useState(initialState);
  const [showUserSettings, toggleUserSettings] = useState(false);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    /* const response = await axios.get("https://foodlist.onrender.com/foods", {}); */
    const response = await axios.get(
      "http://localhost/foodapi/getfoods.php",
      {}
    );
    console.log(response.data);
    setState({ ...state, foodList: response.data });
  };

  return (
    <div className="flex-column center main-container">
      <Navbar
        toggleUserSettings={() => toggleUserSettings(!showUserSettings)}
      />
      <Glucose show={showUserSettings} />
      <FoodInput foods={state.foodList} />
    </div>
  );
};

export default App;
