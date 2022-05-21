import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            <h5>About Us</h5>
            <p>We are a genuine vehicle importer and wholesaler.</p>
            <p>No high pressure salesmen. .</p>
            <p>100% Kiwi owned and operated.</p>
            <p>All imported cars fully complied and certified by VTNZ.</p>
            <p>All freshly imported vehicles have fully certified odometers.</p>
          </Col>
          <Col md="6">
            <h5>Our Hours</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sataurday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Thrusday</td>
                  <td>9:00am-5:00pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
