import { Component } from "react";
import style from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={style.title}>
        <h1>Evangadi Menu</h1>
        <div></div>
      </div>
    );
  }
}
export default Header;
