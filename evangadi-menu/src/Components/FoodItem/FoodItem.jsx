// src/components/FoodItem.jsx
import { Component } from "react";

class FoodItem extends Component {
  render() {
    const { image, title, price, description } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={image} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{description.slice(0, 300)}...</div>
      </div>
    );
  }
}

export default FoodItem;
