import React from "react";
import { Button, Card, Ratio } from "react-bootstrap";

const CourseCard = (props) => {
  let { imgSrc, title, text, footertext } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" className="w-100">
          Example Button
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{footertext}</small>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
