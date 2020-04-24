import React from "react";
import { returnStudentNames } from "../utils/namesArray";
import StudentButton from "./StudentButton";

const Nav = () => {
  return (
    <div className="navbar">
      {returnStudentNames().map((name) => {
        return <StudentButton key={`${name}-button`} name={name} />;
      })}
    </div>
  );
};

export default Nav;
