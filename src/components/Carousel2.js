import React, { useState } from "react"
import { Carousel } from "react-bootstrap"

const Carousel2 = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    };

    return (
        <div1 id="capture">




            {/* ----code below is the carousel for lightsaber handles---- */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>

                    <img id='one' className="d-block w-100"
                        src={require('./images/S1.png')}
                        alt="First Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S2.png')}
                        alt="Second Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S3.png')}
                        alt="Third Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S4.png')}
                        alt="Fourth Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S5.png')}
                        alt="Fifth Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S6.png')}
                        alt="Sixth Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100"
                        src={require('./images/S7.png')}
                        alt="Seventh Design"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div1>
    );

}



export default Carousel2;
