import "./App.css";
import foodsData from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Button, Divider } from "antd";
import EmptyList from "./components/EmptyList";

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [allFoods, setAllFoods] = useState(foodsData);

  const [isShowing, setIsShowing] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);

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
      //console.log("inside if for food searched - all");
    } else {
      filteredFoodList = allFoods.filter((specificFood) => {
        //console.log(foodSearched);
        return specificFood.name.toLowerCase() === foodSearched.toLowerCase();
      });
    }

    setFoods(filteredFoodList);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((oneFood) => {
      return oneFood.name.toLowerCase() !== foodName.toLowerCase();
    });

    setFoods(filteredFoods);

    if (filteredFoods === []) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const showForm = () => {
    if (isShowing === false) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  };
  // console.log("foods:", foods);

  // const noContent = () => {

  // };

  return (
    <div className="App">
      {isShowing ? <AddFoodForm addNewFood={addNewFood} /> : null}

      <Button onClick={showForm}>
        {isShowing ? "Hide Form" : "Add New Food"}
      </Button>

      <Search searchFoodList={searchFoodList} />

      <Divider>Food List</Divider>

      {isEmpty ? (
        <EmptyList />
      ) : (
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {foods.map((eachFood) => {
            return <FoodBox foodObj={eachFood} deleteFood={deleteFood} />;
          })}
        </Row>
      )}
    </div>
  );
}

export default App;
