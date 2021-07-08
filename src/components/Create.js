import React, { useState } from "react"
import {  Form, Card, Button, Alert, Carousel } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Create() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  const [loading ] = useState(false)


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
            src="https://lumiere-a.akamaihd.net/v1/images/count-dookus-lightsaber_b5744c18.jpeg?region=69%2C0%2C1422%2C800&width=768"
            alt="First Design"
          />
          <Carousel.Caption>
            <h3 className="text-dark">COUNT DOOKU'S LIGHTSABER</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 text-center mt-2"
            src="https://lumiere-a.akamaihd.net/v1/images/image_253e49bc.jpeg?region=0%2C0%2C1600%2C900&width=768"
            alt="Second Design"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">THE GRAND INQUISITOR'S LIGHTSABER</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 text-center mt-2"
            src="https://lumiere-a.akamaihd.net/v1/images/qui-gon-jinns-lightsaber_de362907.jpeg?region=279%2C0%2C1192%2C669&width=768"
            alt="Third Design"
          />
          <Carousel.Caption>
            <h3 className="text-dark">QUI-GON'S LIGHTSABER</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100 text-center mt-2"
            src="https://lumiere-a.akamaihd.net/v1/images/mace-windus-lightsaber_96a893e2.jpeg?region=69%2C0%2C1422%2C800&width=768"
            alt="Fourth Design"
          />
  
          <Carousel.Caption>
            <h3 className="text-dark">MACE WINDU'S LIGHTSABER</h3>
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
          <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
          <Button disabled={loading} className="w-100" type="submit">
              SAVE
            </Button>
            </Form>
        </Card.Body>
      </Card>
          <br></br>
          <br></br>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
