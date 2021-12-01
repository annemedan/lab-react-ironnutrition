import "./App.css";
import foodsData from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [allFoods, setAllFoods] = useState(foodsData);

  const addNewFood = (foodObj) => {
    const updatedFoods = [...foods, foodObj];
    const updatedAllFoods = [...allFoods, foodObj];
    setFoods(updatedFoods);
    setAllFoods(updatedAllFoods);
  };

  const searchFoodList = (foodSearched) => {
    let filteredFoodList;
    if (foodSearched === "") {
      filteredFoodList = allFoods;
      console.log("inside if for food searched - all");
    } else {
      filteredFoodList = allFoods.filter((specificFood) => {
        console.log(foodSearched);
        //console.log("specificFood", specificFood, typeof specificFood);
        return specificFood.name.toLowerCase() === foodSearched.toLowerCase();
      });
    }

    setFoods(filteredFoodList);
  };

  return (
    <div className="App">
      <Search searchFoodList={searchFoodList} />

      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((eachFood) => {
        return <FoodBox foodObj={eachFood} />;
      })}
    </div>
  );
}

export default App;
