import React, { useState, useEffect } from "react";
import cubiertosLogo from "../resources/cubiertos.png";
import "../styles/foodInput.css";

const FoodInput = ({ foods }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [carbData, setCarbData] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [selectedFoodList, setSelectedFoodList] = useState([]);

  useEffect(() => {
    const filteredFoodList = foods.filter((food) =>
      food.food_name.toLowerCase().includes(searchTerm)
    );
    setFoodList(filteredFoodList);
  }, [searchTerm]);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    const foundElement = foodList.find(
      (foodListItem) => foodListItem.food_name === e.target.value
    );
    if (foundElement) {
      setSelectedFoodList([...selectedFoodList, foundElement]);
      setSearchTerm("");
    }
  };

  const renderOptions = foodList.map((option) => {
    return (
      <option
        className="food-list-option"
        value={option.food_name}
        /* value={`${option.food_name} ${option.quantity}`} */
        key={`00-${option.id}`}
      >
        {`${option.food_name}, ${option.quantity}`}
      </option>
    );
  });

  const renderSelectedFoodList = selectedFoodList.map((selectedFood) => {
    return (
      <li className="selected-food-item" key={selectedFood.id}>
        {selectedFood.food_name}
      </li>
    );
  });

  const calcCarb = () => {
    return selectedFoodList.reduce((sum, food) => {
      return sum + Number(food.carbohydrates);
    }, 0);
  };

  const calcInsulina = () => {
    const carbs = selectedFoodList.reduce((sum, food) => {
      return sum + Number(food.carbohydrates);
    }, 0);

    return (carbs / 13).toFixed(1);
  };

  return (
    <div className="flex-column center food-input-group">
      <label class="buscar-label">
        <h2 className="buscar-tag tag"></h2>
        <img className="cubiertos-logo" src={cubiertosLogo} />
      </label>
      <input
        list="foods"
        name="myFoods"
        value={searchTerm}
        placeholder="Buscar alimento..."
        onChange={handleOnChange}
        className="food-input box-shadow"
      />
      <datalist id="foods">{renderOptions}</datalist>
      <ul className="selected-foodlist">{renderSelectedFoodList}</ul>
      <div className="info-field">
        <h3 className="legend">
          El total de carbohidratos es de: <b className="carbs">{calcCarb()}</b>{" "}
          gramos
        </h3>
      </div>
      <br />
      <br />
      <div className="info-field disabled">
        <h3 className="legend">
          La cantidad a inyectarse sera de{" "}
          <b className="carbs insulina">{calcInsulina()}</b> unidades
        </h3>
      </div>
    </div>
  );
};

export default FoodInput;

// Reemplazar datalist con un div, que se muestre/oculte dependiendo del
// estado de un toggle (crear un hook para el select toggle
// eg const [toggle, setToggle] = useState(false)
