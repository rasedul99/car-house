import React, { useEffect, useState } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import BlogCard from "../../components/BlogCard/BlogCard";
import Items from "../../components/Items/Items";
import Loading from "../../components/Loading/Loading";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Layout from "../Layout";

const Home = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return (
    <div>
      {show ? (
        <Loading />
      ) : (
        <Layout>
          <Banner />

          <div className="container my-2">
            <Items />
            <h3 className="text-center my-3">Recent Blog</h3>
            <div className="my-3  row ">
              <BlogCard
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBN9o1ACoCmMZ5PxWvOVwlumVi4ma2-1T1pzyeCrLXdQ&s"
                title="BMW"
                description="The newest model in the BMW line-up is the X6 with a price tag of 90.00 Lakh - 1.04 Cr. BMW cars in India under 50 Lakh include the 2 Series, X1 and 3 Series."
              />
              <BlogCard
                img="https://images.dealer.com/ddc/vehicles/2022/Audi/A3/Sedan/color/Atoll%20Blue%20Metallic-3F3F-0,139,208-640-en_US.jpg"
                title="2022 Audi A3 Sedan"
                description="The standard features of the Audi A3 40 Premium include 2.0L  intercooled turbo engine, 7-speed auto-shift manual transmission with overdrive"
              />
              <BlogCard
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmHboMAT2VkuDVpLaBw3u-EfLPT76GlwIbdpKNxk_nA&s"
                title="Mercedes-Benz"
                description="The newest additions to the Mercedes-Benz family are the 2020 GLB SUV and the 2020 EQC (Mercedes-Benz first electric vehicle).A world classy car in 2022.will best suit for anyone"
              />
            </div>

            <AboutUs />
            <NewsLetter />
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Home;
