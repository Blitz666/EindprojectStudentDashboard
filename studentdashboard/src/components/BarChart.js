import React, { useState, useEffect } from "react";
import dataFromExcel from "../data/dataFromExcel";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const BarChart = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    filterCategories();
  }, []);

  const filterCategories = () => {
    const categories = [];
    dataFromExcel.forEach((item) => {
      if (item.name === props.name) {
        categories.push(item.assignment);
      }
    });

    setCategories(categories);
  };

  return (
    categories.length !== 0 && (
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          barWidth={1}
          cornerRadius={{}}
          style={{
            labels: {
              fontSize: 1,
            },
          }}
          data={[
            { x: 1, y: 0, y0: 1 },
            { x: 2, y: 0, y0: 2 },
            { x: 3, y: 0, y0: 2 },
            { x: 4, y: 0, y0: 3 },
            { x: 5, y: 0, y0: 3 },
          ]}
          categories={{ x: categories }}
        />
      </VictoryChart>
    )
  );
};

export default BarChart;
