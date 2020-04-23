import React from "react";
import "./App.css";
// import dataFromExcel from "./data/dataFromExcel";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Evelyn">
            <Link to="/">Home</Link>
            <h1>This is Evelyn</h1>
          </Route>
          <Route path="/">
            <Link to="/Evelyn">Evelyn</Link>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
