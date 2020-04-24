import React from "react";
import BarChartRechart from "./BarChartRechart";
import LineChartRechart from "./LineChartRechart";

function StudentView(props) {
  return (
    <>
      <h1 align="center">{props.name}</h1>
      <LineChartRechart name={props.name} />
    </>
  );
}

export default StudentView;
