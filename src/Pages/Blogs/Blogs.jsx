import React from "react";
import { Container, Table } from "react-bootstrap";
import Layout from "../Layout";

const Blogs = () => {
  return (
    <Layout>
      <div>
        <Container>
          <h3 className="text-center my-2">
            Difference between javascript and nodejs
          </h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Javascript</th>
                <th>Node Js</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.{" "}
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              <tr>
                <td>Javascript can only be run in the browsers.</td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              <tr>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Container>
          <h3 className="text-center">
            Differences between sql and nosql databases.
          </h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>SQL </th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>relational</td>
                <td>non-relational</td>
              </tr>
              <tr>
                <td>
                  use structured query language and have a predefined schema.
                </td>
                <td>
                  NoSQL database have dynamic schemas for unstructured data.
                </td>
              </tr>
              <tr>
                <td>are vertically scalable</td>
                <td>are horizontally scalable.</td>
              </tr>
              <tr>
                <td>are table based</td>
                <td>are document, key-value, graph or wide-column stores.</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Container>
          <h3>What is the purpose of jwt and how does it work ?</h3>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
        </Container>

        <Container>
          <h3>When should you use nodejs and when should you use mongodb ?</h3>
          <p>
            MongoDB is the Document Oriented Database. MongoDB stores a lot of
            data in JSON format. MongoDB's performance is much faster than any
            RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB
            can work on multiple servers. MongoDB can handle a large number of
            access requests easily. => There are 2 design patterns in
            programming. One is asynchronous programming and the other is
            synchronous programming. Node JS by default follows the Asynchronous
            pattern. That is, it does not wait for a task to be completed. In
            the meantime, NodeJS started another job. That’s why we use nodeJS
          </p>
        </Container>
      </div>
    </Layout>
  );
};

export default Blogs;
