import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './components/Login'
import Saber from './components/Saber.js';
import PrivateRoute from './components/PrivateRoute';
import '../src/App.css';
import { Navbar } from 'react-bootstrap';

// Sean had import statements for screenshotcapture on this page ; in process of switching screencapture libraries
// the rest is joeys
// place Form and screencapture components in saber.js

function App() {

  return (
    <div className="App">
      <Router>
      <div>

        {/* figure out navbar react bootstrap */}
    <Navbar className="navbar">
      <NavLink to="/Login" className="navlink" id="loginlink">Login</NavLink><br/>
        <NavLink to="/Saber" className="navlink">Build a Lightsaber</NavLink>  
    </Navbar>

      </div>
      <Switch>
      <Route path="/Login">
            <Login />
          </Route>
          <Saber/>
         {/* <PrivateRoute path="/Saber" component={Saber}/> */}
      </Switch>
    </Router> 
   
      
    </div>
  );
}

export default App;
