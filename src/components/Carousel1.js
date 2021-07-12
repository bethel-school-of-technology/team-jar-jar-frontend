import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import '../components/Carousel1.css';
const Carousel1 = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    };

    return (
        <div>


<Carousel activeIndex={index} onSelect={handleSelect} >
          <Carousel.Item>

            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L1.png')}
              alt="First Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L2.png')}
              alt="Second Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L3.png')}
              alt="Third Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L4.png')}
              alt="Fourth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L5.png')}
              alt="Fifth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L6.png')}
              alt="Sixth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L7.png')}
              alt="Seventh Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L8.png')}
              alt="Eigth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 justify-content-md-center"
              src={require('./images/L9.png')}
              alt="Ninth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L10.png')}
              alt="Tenth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L11.png')}
              alt="Eleventh Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L12.png')}
              alt="Twelfth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img className="d-flex justify-content-center"
      style={{ height: '18rem' }}
              src={require('./images/L13.png')}
              alt="Thirteenth Design"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

</div>

);
    }

        export default Carousel1;