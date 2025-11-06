// src/components/FoodItem.jsx
import { Component } from "react";
import style from "./FoodItem.module.css";

class FoodItem extends Component {
  render() {
    const {singleFood}= this.props;
const { image, title, price, desc, link } = singleFood;

    const size = 300;
    const trimmed = desc.length >= size ? `${desc.slice(0, 300)}...` : desc;

    return (
      <div className={style.singleFood}>
        <div className="img">
          <img src={image} />
        </div>
        <div className={style.titlePrice}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className={style.foodDesc}>{trimmed}</div>
        {link && (
          <div className={style.link}>
            <a href="#">{link}</a>
          </div>
        )}
      </div>
    );
  }
}

export default FoodItem;
