import { Component } from "react";
import Header from "./Components/Header/Header";
import FoodItem from "./Components/FoodItem/FoodItem";
import menu from "./commonResource/data.js";
import style from "../src/App.module.css";

class App extends Component {
  render() {
    return (
      <div className={style.allContainer}>
        <Header />

        <div className={style.foodContainer}>
          {menu.map((food, index) => (
            <FoodItem
              key={index}
              image={food.img}
              title={food.title}
              price={food.price}
              description={food.desc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
