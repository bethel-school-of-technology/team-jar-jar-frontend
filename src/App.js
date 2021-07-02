import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login'

// hi again 


function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Link to="/Login">Login</Link>

      </div>

      <Switch>
      <Route path="/Login">
            <Login />
          </Route>
      </Switch>
    </Router> 
   
      
    </div>
  );
}

export default App;
