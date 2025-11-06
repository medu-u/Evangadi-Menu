import { Component } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import FoodContainer from "./Components/FoodMenu/FoodContainer";


class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodContainer />
      </div>
    );
  }
}

export default App;
