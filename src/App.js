import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Saber from './components/Saber.js';
import ScreenCapture from './components/ScreenCapture.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// hi

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Link to="/Saber">Saber</Link>
      </div>
      <div>
        <Link to="/ScreenCapture"></Link>
      </div>
      <Switch>
      <Route path="/Saber">
            <Saber />
          </Route>
          <Route path="/ScreenCapture">
            <ScreenCapture />
          </Route>
      </Switch>
    </Router>
    {/* **** this is for the nav setup with sean **** */}
    </div>
  );
}


export default App;
