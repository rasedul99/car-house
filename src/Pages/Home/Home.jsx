import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <h3>My Items</h3>
      <Items />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
