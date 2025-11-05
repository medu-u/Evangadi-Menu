// src/components/FoodItem.jsx
import { Component } from "react";
import style from "./FoodItem.module.css";

class FoodItem extends Component {
  render() {
    const { image, title, price, description } = this.props;
    return (
      <div className={style.singleFood}>
        <div className="img">
          <img src={image} />
        </div>
        <div className={style.titlePrice}>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className={style.foodDesc}>{description.slice(0, 300)}...</div>
      </div>
    );
  }
}

export default FoodItem;
