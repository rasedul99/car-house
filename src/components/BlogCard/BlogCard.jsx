import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, description }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to="#" className="btn btn-primary">
            Manage
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
