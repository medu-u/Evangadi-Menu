import { Component } from 'react'
import style from './FoodContainer.module.css';
import FoodItem from '../FoodItem/FoodItem';
import menu from '../../commonResource/data';

class FoodContainer extends Component {
  render() {
    
    return (
        <div className={style.foodContainer}>
          
          {menu?.map((food, i) => (
            <FoodItem
              key={i} singleFoods = {food} />
          ))}
        </div>
    );
  }
}
export default FoodContainer;