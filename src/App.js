import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login'
import Saber from './components/Saber.js';
// import './components/ScreenCapture';
// import ScreenCaptureComponent from './components/ScreenCapture'; 
import PrivateRoute from './components/PrivateRoute';

// Sean had import statements for screenshotcapture on this page ; in process of switching screencapture libraries
// the rest is joeys
// place Form and screencapture components in saber.js
function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Link to="/Login">Login</Link>
      <Link to="/Saber">Saber</Link>


      </div>
      {/* test routes to see if they are working proerly */}
      <Switch>
      <Route path="/Login">
            <Login />
          </Route>
         <PrivateRoute path="/Saber" component={Saber}/>
      </Switch>
    </Router> 
   
      
    </div>
  );
}

export default App;
