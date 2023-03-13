import React, { useEffect, useState } from "react";
import axios from "axios";
import Glucose from "./components/Glucose";
import FoodInput from "./components/FoodInput";
import { foods } from "./resources/foodList";
import "./styles/global.css";

const App = () => {
  const initialState = { foodList: [] };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    const response = await axios.get("https://foodlist.onrender.com/foods", {});
    setState({ ...state, foodList: response.data });
  };

  return (
    <div className="flex-column center main-container">
      <Glucose />
      <FoodInput foods={state.foodList} />
    </div>
  );
};

export default App;
