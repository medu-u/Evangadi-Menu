import { Component } from "react";
import Header from "./Components/Header/Header";
import FoodItem from "./Components/FoodItem/FoodItem";
import menu from "./commonResource/data.js";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />

        <div className="foods-container">
          {menu.map((food, index) => (
            <FoodItem
              key={index}
              image={food.img}
              title={food.title}
              price={food.price}
              description={food.desc}
              category={food.category}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
