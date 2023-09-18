import React,  { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";

import {
  Nav,
  Form,
  Button,
  Container,
  Navbar,
} from "react-bootstrap";
import logo from "../img/natural-language-processing.png";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  
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
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/about">О нас</Nav.Link>
              <Nav.Link href="/catalog">Курсы</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
            <Form className="d-flex">
              {/* <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              /> */}         

            </Form>
            {authUser ? (
                  <>
                    <Navbar.Text>
                      {`Пользователь ${authUser.email}`}
                    </Navbar.Text>
                    <Button
                      variant="outline-info ms-lg-2"
                      sx={{ mt: 3, mb: 2 }}
                      startIcon={<LoginIcon />}
                      onClick={userSignOut}
                    >
                      Выйти
                    </Button>
                    
                  </>
                ) : (
                  <Button variant="outline-info ms-lg-2" onClick={navigateToLogIn}>
                    Войти
                  </Button>
                )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
