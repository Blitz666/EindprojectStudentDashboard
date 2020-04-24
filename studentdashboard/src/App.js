import React from 'react';
import './App.css';
import Home from './pages/Home';
import StudentView from './components/StudentView';
import { returnStudentNames } from './utils/namesArray';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(returnStudentNames());
        return (
            <>
                <Router>
                    <Header />
                    <Nav />
                    <Switch>
                        {returnStudentNames().map((name) => (
                            <Route path={`/${name}`}>
                                <StudentView name={name} />
                            </Route>
                        ))}
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
