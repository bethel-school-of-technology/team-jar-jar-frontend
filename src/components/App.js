import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Create from "./Create"
import './backgroundlightspeed.jpeg';
import Jumbotron from 'react-bootstrap/Jumbotron'


function App() {
  return (
    <>
    {/* <Navbar fixed="top" bg="dark">
    <Navbar.Brand href="/login">
      <img
        src="/backgroundlightspeed.jpeg"
        width="40"
        height="30"
        className="d-inline-block align-top"
        alt="navlogo"
      />
    </Navbar.Brand>
  </Navbar> */}
    <Jumbotron fluid>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      
      <div className="w-100" style={{ maxWidth: "400px" }}>

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/create" component={Create} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </Jumbotron>
  </>
  )
}
// tailwind webpack react typescript linting tools prettier docker github actions
export default App
