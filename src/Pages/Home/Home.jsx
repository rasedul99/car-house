import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import BlogCard from "../../components/BlogCard/BlogCard";
import Items from "../../components/Items/Items";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Layout from "../Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Banner />

        <div className="container my-2">
          <h3 className="text-center mt-2">My Items</h3>
          <Items />
          <h3 className="text-center my-3">Recent Blog</h3>
          <div className="my-3  row ">
            <BlogCard
              img="https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg"
              title="hello"
              description="Lorem5"
            />
            <BlogCard
              img="https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg"
              title="hello"
              description="Lorem5"
            />
            <BlogCard
              img="https://image.shutterstock.com/image-photo/auto-check-car-service-shop-600w-1701289168.jpg"
              title="hello"
              description="Lorem5"
            />
          </div>

          <AboutUs />
          <NewsLetter />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
