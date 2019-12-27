import React from 'react';
import './App.css';
import Home from './pages/Home';
import Results from './pages/Results';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/results/:query/:collection?">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
