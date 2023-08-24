import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Nav,
  Form,
  Button,
  Container,
  // FormControl,
  Navbar,
} from "react-bootstrap";
import logo from "../img/natural-language-processing.png";

export default function Header() {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/registration");
  };

  const navigateToLogIn = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        style={{ position: "sticky" }}
      >
        <Container>
          <Navbar.Brand href="/" className="p-xl-0">
            <img
              src={logo}
              height="40"
              width="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
            <Form className="d-flex">
              {/* <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              /> */}
              <Button variant="outline-info ms-lg-2" onClick={navigateToSignUp}>
                Sign Up
              </Button>
              <Button variant="outline-info ms-lg-2" onClick={navigateToLogIn}>
                Log In
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
