import React, { useState } from "react"
import { Card, Button, Alert, Carousel } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="w-100 text-center mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber%2C_silver_hilt%2C_blue_blade.png"
            alt="First Design"
          />
          <Carousel.Caption>
            <h3 className="text-dark">First Design</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 text-center mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Lightsaber_blue.png"
            alt="Second Design"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">Second Design</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

  return (
    <>
    <div className="w-100 text-center mt-2">
    
  </div>
      <ControlledCarousel />
      
          <h2 className="text-center mb-8">
          <div className="text-center mb-8">
            Design your own</div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Lightsaber_logo.png" alt="lightsaber logo"></img>
            </div>
          </h2>
          <Link to="/create" className="btn btn-success w-100 mt-3">
            Create!
          </Link>
          <br></br>
          <br></br>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}


