import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import cubiertosLogo from "../resources/cubiertos.png";

const FoodInputContainer = styled(motion.div)`
  padding: 50px 15px;
  width: -webkit-fill-available;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(251, 251, 251, 0.112)
  );
  background-size: 300%;
  /* min-height: 84dvh; */

  input {
    border-radius: 7px;
    padding: 10px 10px;
    border: none;
  }
  .selected-foodlist {
    list-style: none;
    margin: 1.5rem 0;
  }
  .selected-food-item {
    border-bottom: 1px solid;
    margin-bottom: 0.75rem;
  }
  label {
    margin: 1rem;
  }
  .carbs {
    color: rgba(235, 74, 42, 0.977);
    font-size: 32px;
  }
  .insulina {
    color: rgba(42, 235, 116, 0.977);
    font-size: 32px;
  }
  .cubiertos-logo {
    width: 130px;
    margin-bottom: 30px;
  }
  .buscar-label {
    text-align: center;
  }
  .food-input {
    min-width: 300px;
  }
  img {
    transition: all 0.4s ease-in-out;
  }
`;

const FoodInput = ({ foods }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodList, setFoodList] = useState([]);
  const [selectedFoodList, setSelectedFoodList] = useState([]);

  useEffect(() => {
    const filteredFoodList = foods.filter((food) =>
      food.food_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
    <FoodInputContainer className="flex-column center food-input-group">
      <label className="buscar-label">
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
    </FoodInputContainer>
  );
};

export default FoodInput;
