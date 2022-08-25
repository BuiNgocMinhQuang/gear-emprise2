import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import image1 from "../../../assets/images/banner1.jpeg";
import image2 from "../../../assets/images/banner2.png";
import image3 from "../../../assets/images/banner3.jpeg";
import image4 from "../../../assets/images/banner4.jpeg";
import image5 from "../../../assets/images/banner5.jpeg";
import "./Carousel.scss";
function CarouselContainer() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="title-banner">LEVEL UP YOUR STREAM</h1>
          <p className="des-banner">
            Bundle up and save up to $150 on an Elgato Face Cam, Elgato Stream
            Deck Mini, and CORSAIR HS80 RGB Wireless Headset with your custom
            ORIGIN PC system.
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h1 className="title-banner">LEVEL UP YOUR STREAM</h1>
          <p className="des-banner">
            Bundle up and save up to $150 on an Elgato Face Cam, Elgato Stream
            Deck Mini, and CORSAIR HS80 RGB Wireless Headset with your custom
            ORIGIN PC system.
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="title-banner">LEVEL UP YOUR STREAM</h1>
          <p className="des-banner">
            Bundle up and save up to $150 on an Elgato Face Cam, Elgato Stream
            Deck Mini, and CORSAIR HS80 RGB Wireless Headset with your custom
            ORIGIN PC system.
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="title-banner">LEVEL UP YOUR STREAM</h1>
          <p className="des-banner">
            Bundle up and save up to $150 on an Elgato Face Cam, Elgato Stream
            Deck Mini, and CORSAIR HS80 RGB Wireless Headset with your custom
            ORIGIN PC system.
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="title-banner">LEVEL UP YOUR STREAM</h1>
          <p className="des-banner">
            Bundle up and save up to $150 on an Elgato Face Cam, Elgato Stream
            Deck Mini, and CORSAIR HS80 RGB Wireless Headset with your custom
            ORIGIN PC system.
          </p>
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContainer;
