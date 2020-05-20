import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Protfolio from "./components/protfolio/Protfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/about' component={ About }/>
            <Route exact path='/resume' component={ Resume }/>
            <Route exact path='/protfolio' component={ Protfolio  }/>
            <Route exact path='/services' component={ Services }/>
            <Route exact path='/contact' component={ Contact  }/>
          </Switch>
        </Router>
      </div>

  );
}

export default App;
