import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";
import Carousel2 from './Carousel2'
import Carousel1 from './Carousel1'
import '../components/Create.css';
import './images/L1.png';

export default function Create() {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const history = useHistory()
  const [loading] = useState(false)


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
    //     function takeShot() { 
    //       html2canvas(document.querySelector("#capture")).then(canvas => {
    //        document.querySelector("#output").appendChild(canvas)
    //    });
    // }

    return (
      
        <div>
        <Container
      className="d-flex justify-content-center"
    >
          {/* ----the code below imports the second carousel---- */}
          <Carousel2 />,
          </Container>
          <Container
      className="d-flex justify-content-center"
      style={{ height: '18rem' }}
    >
            <Carousel1  className="d-flex justify-content-center"
      style={{ height: '18rem' }}/>
            </Container>

          {/* ----code below is the carousel for lightsaber handles---- */}

      </div>
    );

  }



  return (
    <>
      {/* <div className="w-100 text-center mt-2">

      </div> */}
      <ControlledCarousel />


      {/* ----code below is the lightsaber word logo---- */}
      <h3 className="text-center mb-8">
        <div className="text-center mb-8">
          Design your own</div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Lightsaber_logo.png" alt="lightsaber logo"></img>
        </div>
      </h3>



      <Card className="bg-dark text-white">
        <Card.Body>
          <h2 className="text-center mb-4">Click Below to Save </h2>
          {error && <Alert variant="danger">{error}</Alert>}



          {/* ----screenshot button save to server---- */}
          <Button className="w-100" type="submit">
            SAVE
            </Button>


          <div id="output">Screenshot:</div>





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