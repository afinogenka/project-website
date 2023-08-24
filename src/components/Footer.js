import { Container } from "react-bootstrap";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-dark" style={{ color: "#FFFFFF8C" }}>
        <Container
          className="d-flex p-0 justify-content-center"
          // style={{ padding: "10px", display: "flex", justifyContent: "center" }}
        >
          <p>Текст для футера</p>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
