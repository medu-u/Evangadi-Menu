import { Component } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import FoodContainer from "./Components/FoodMenu/FoodContainer";


class App extends Component {
  render() {
    return (
      <div className="allContainer">
        <Header />
        <FoodContainer />
      </div>
    );
  }
}

export default App;
