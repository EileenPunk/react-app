import React from "react";
import './sass/app.scss';
import Home from './components/home';
import About from './components/about';
import {Route, Link} from 'react-router-dom';
import Nav from './components/nav';

function App() {
    return (
        <div className="App">
            <Nav />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
        </div>
    )
}

export default App;