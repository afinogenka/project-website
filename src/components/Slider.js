import React, { Component } from "react";
import { Button, Container, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../img/blogger1.jpg";
import img2 from "../img/iStock-1066557788-scaled-1.jpg";
import img3 from "../img/virtual_school_Learner.jpg";

export default function Slider() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/registration");
  };

  return (
    <>
      <Container className="dark" fluid style={{ padding: "0px" }}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
              text="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <Button
                variant="outline-info"
                size="lg"
                onClick={navigateToSignUp}
              >
                Начать обучение
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={img2}
              alt="First slide"
              text="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button
                variant="outline-info"
                size="lg"
                onClick={navigateToSignUp}
              >
                Начать обучение
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
              text="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button
                variant="outline-info"
                size="lg"
                onClick={navigateToSignUp}
              >
                Начать обучение
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
