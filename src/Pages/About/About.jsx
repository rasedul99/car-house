import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <div className="container my-2">
        <h3 className="text-center my-3">About CarHouse</h3>
        <AboutUs />
      </div>
    </Layout>
  );
};

export default About;
