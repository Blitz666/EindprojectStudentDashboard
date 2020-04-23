import React from "react";

import dataFromExcel from "../data/dataFromExcel";
import BarChartRechart from "../components/BarChartRechart";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      show: false,
    };
  }

  componentDidMount() {
    this.filterNames();
  }

  filterNames = () => {
    const names = [];
    dataFromExcel.forEach((item) => {
      console.log(item);
      if (!names.includes(item.studentName)) names.push(item.studentName);
    });
    this.setState({
      names: names,
      show: true,
    });
  };

  render() {
    return this.state.show ? (
      <div className="App">
        <h1>Opdrachtje</h1>
        {this.state.names.map((name) => {
          return (
            <>
              <BarChartRechart key={name} name={name} />
            </>
          );
        })}
      </div>
    ) : (
      ""
    );
  }
}

export default Home;
