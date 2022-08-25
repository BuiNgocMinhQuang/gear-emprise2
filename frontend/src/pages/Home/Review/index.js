import image from "../../../assets/images/bg1-menu.jpeg";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Review.scss";

function Review() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="review">
      <div className="left-review">
        <img src={image} alt="" />
        <div className="content">
          <h1>FEATURED REVIEW</h1>
          <h2>EVO17-S</h2>
          <p className="title">PC Gamer rates our EVO17-S an 85 out of 100</p>
          <p className="desl">
            "A beast of a laptop with incredible graphics card performance,
            impressive battery life, and a thin frame.” - PC Gamer
          </p>
        </div>
        <div className="btn-left-review">
          <Button variant="outline-secondary" className="btn-shopnow">
            SHOP NOW
          </Button>
          <a href="/" className="more-review">
            MORE Review
            <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
          </a>
        </div>
      </div>
      <div className="right-review">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <h1 className="testimonials">TESTIMONIALS</h1>
            <h2 className="title">"Amazing service and PC quality"</h2>
            <p className="des">
              "I ordered the 7000x with a hardline custom loop. My sales rep was
              Arturo, super cool and nice. The...
            </p>
            <a href="/" className="more-test">
              MORE TESTIMONIALS
              <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="testimonials">TESTIMONIALS</h1>
            <h2 className="title">"Amazing new PC ordering experience!"</h2>
            <p className="des">
              "After months of research, and being let down with support
              responses from at least 5 other system, and...
            </p>
            <a href="/" className="more-test">
              MORE TESTIMONIALS
              <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="testimonials">TESTIMONIALS</h1>
            <h2 className="title">"Great Experience!!!"</h2>
            <p className="des">
              "Nick was my sales Rep and from the minute I ordered the computer
              to the time it went out in shipping I got updated on every
              process, step-by-step...
            </p>
            <a href="/" className="more-test">
              MORE TESTIMONIALS
              <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="testimonials">TESTIMONIALS</h1>
            <h2 className="title">"Amazing Experience Overall. "</h2>
            <p className="des">
              "My experience with Origin Pc has left me extremely satisfied with
              my purchase, speedy and truly HELPFUL customer support,...
            </p>
            <a href="/" className="more-test">
              MORE TESTIMONIALS
              <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <h1 className="testimonials">TESTIMONIALS</h1>
            <h2 className="title">
              "Great Service with the ultimate PC experience "
            </h2>
            <p className="des">
              "OriginPC has truly provided the best service and an amazing
              custom pc built with care and extreme professionalism."
            </p>
            <a href="/" className="more-test">
              MORE TESTIMONIALS
              <FontAwesomeIcon icon={faChevronRight} className="action-icon" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Review;
