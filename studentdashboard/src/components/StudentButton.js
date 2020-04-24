import React from "react";
import { Link } from "react-router-dom";

const StudentButton = (props) => {
  return (
    <span align="center" className="student-button">
      <Link to={`/${props.name}`}>{props.name}</Link>
    </span>
  );
};

export default StudentButton;
