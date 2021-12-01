import { useState } from "react";
import { Input } from "antd";

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    //prevent default behaviour of the browser - reload of the page
    event.preventDefault();

    //get data from the state/inputs
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    //console.log(newFood);
    addNewFood(newFood); // need to have this function ready on app.js

    //clear inputs

    setName("");
    setImage("");
    setCalories(1);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <Input type="text" name="name" value={name} onChange={handleName} />

      <label> Image: </label>
      <Input type="text" name="image" value={image} onChange={handleImage} />

      <label>Calories: </label>
      <Input
        type="number"
        name="calories"
        value={calories}
        onChange={handleCalories}
      />

      <label>Servings: </label>
      <Input
        type="number"
        name="servings"
        value={servings}
        onChange={handleServings}
      />

      <button type="submit">Add new food</button>
    </form>
  );
}

export default AddFoodForm;
