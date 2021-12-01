import { Card, Col, Divider, Button } from "antd";

function FoodBox({ foodObj, deleteFood }) {
  const totalCalories = foodObj.calories * foodObj.servings;

  return (
    <Col>
      <Divider>
        <Card
          title={foodObj.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={foodObj.image} height={60} />
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
      </Divider>
    </Col>
  );
}

export default FoodBox;
