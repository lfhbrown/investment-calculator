import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* not able to access classes.header, styling will not apply */}
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
