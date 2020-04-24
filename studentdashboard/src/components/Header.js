import React from "react";
import { Link } from "react-router-dom";
import WAlogo from "../images/WAlogo.jpg";

const Header = () => {
  return (
    <div align="center">
      <Link to="/">
        <img src={WAlogo} width="30%" />
      </Link>
      <h2 align="center">Class of March 2020</h2>
    </div>
  );
};

export default Header;
