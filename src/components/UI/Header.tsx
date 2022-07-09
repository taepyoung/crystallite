import React from "react";
import "./Header.css";

type HeaderComponent = {
  logo: string;
  menu: string;
};

const testHandler = () => {
  console.log("test");
};

const Header: React.FC<HeaderComponent> = ({ logo, menu }) => {
  return (
    <div className="header">
      <span id="main_logo" className="main_logo">
        <img src="./image.jpg" alt="main_logo" />
        <div className="Crystallize">{logo}</div>
      </span>
      <ul className="header_menu">
        <li className="header_menu__item">
          <button onClick={testHandler}>{menu}</button>
        </li>
        <li className="header_menu__item">
          <button onClick={testHandler}>{menu}</button>
        </li>
        <li className="header_menu__item">
          <button onClick={testHandler}>{menu}</button>
        </li>
      </ul>
      <span id="header_profile">profile</span>
    </div>
  );
};

export default Header;
