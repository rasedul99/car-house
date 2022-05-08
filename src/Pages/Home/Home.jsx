import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Items />
      <Footer />
    </div>
  );
};

export default Home;
