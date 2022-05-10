import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const Items = () => {
  return (
    <div>
      <Row>
        <Col>
          <Item />
          <Item />
        </Col>
        <Col>
          <Item />
          <Item />
        </Col>
        <Col>
          <Item />
          <Item />
        </Col>
      </Row>
      <Link to="/manage-inventories">Manage Inventories</Link>
    </div>
  );
};

export default Items;
