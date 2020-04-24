import React from "react";
import BarChartRechart from "./BarChartRechart";
import LineChartRechart from "./LineChartRechart";

function StudentView(props) {
  return (
    <>
      <div className="studentname">
        <h1>{props.name}</h1>
        <LineChartRechart name={props.name} />
      </div>
    </>
  );
}

export default StudentView;
