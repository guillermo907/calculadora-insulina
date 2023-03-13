import React, { useState, useEffect } from "react";
import "../styles/foodInput.css";

const FoodInput = ({ foods }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [selectedFoodList, setSelectedFoodList] = useState([]);

  useEffect(() => {
    const filteredFoodList = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm)
    );
    setFoodList(filteredFoodList);
  }, [searchTerm]);

  console.log(foodList);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    const foundElement = foodList.find(
      (foodListItem) => foodListItem.name === e.target.value
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
        value={option.name}
        key={`00-${option.id}`}
      />
    );
  });

  const renderSelectedFoodList = selectedFoodList.map((selectedFood) => {
    return (
      <li className="selected-food-item" key={selectedFood.id}>
        {selectedFood.name}
      </li>
    );
  });

  const calcCarb = () => {
    return selectedFoodList.reduce((sum, food) => {
      return sum + food.carbohydrates;
    }, 0);
  };

  return (
    <div className="flex-column center food-input-group">
      <label>
        <h2>Buscar Alimento</h2>
      </label>
      <input
        list="foods"
        name="myFoods"
        value={searchTerm}
        onChange={handleOnChange}
        className="food-input box-shadow"
      />
      <datalist id="foods">{renderOptions}</datalist>
      <ul className="selected-foodlist">{renderSelectedFoodList}</ul>
      <div>
        <h3>
          El total de carbohidratos es de: <b className="carbs">{calcCarb()}</b>{" "}
          gramos
        </h3>
      </div>
    </div>
  );
};

export default FoodInput;

// Reemplazar datalist con un div, que se muestre/oculte dependiendo del
// estado de un toggle (crear un hook para el select toggle
// eg const [toggle, setToggle] = useState(false)
