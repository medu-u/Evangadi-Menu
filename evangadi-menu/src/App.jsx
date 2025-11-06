import { Component } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import FoodContainer from "./Components/FoodContainer/FoodContainer";


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
