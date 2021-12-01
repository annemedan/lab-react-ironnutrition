import { Card, Col, Button } from "antd";

function FoodBox({ foodObj, deleteFood }) {
  const totalCalories = foodObj.calories * foodObj.servings;
  //console.log(foodObj);
  return (
    <Col>
      <Card
        title={foodObj.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodObj.image} height={60} alt="food" />
        <p>Calories: {foodObj.calories}</p>
        <p>Servings: {foodObj.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(foodObj.name)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
