import React from "react";
import { Link } from "react-router-dom";
import WAlogo from "../images/WAlogo.png";

const Header = () => {
  return (
    <div className="header" align="center">
      <Link to="/">
        <img src={WAlogo} width="30%" />
      </Link>
      <h2>Class of March 2020</h2>
    </div>
  );
};

export default Header;
