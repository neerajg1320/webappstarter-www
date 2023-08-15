import "../sass/basic.scss";
import React from "react";
import Navbar from "../components/navbar";
import IntroBlock from "../components/indexPage/introBlock";
import FeaturedImage from "../components/indexPage/featuredImage";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <IntroBlock />
      <FeaturedImage />
      <Footer />
    </>
  )
};

export default IndexPage;

export const Head = () => <title>Webapp Starter</title>
