import React from "react";
import { Col, Row } from "react-bootstrap";
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
    </div>
  );
};

export default Items;
