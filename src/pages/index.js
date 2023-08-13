import "../sass/basic.scss";
import React from "react";
import Navbar from "../components/navbar";
import IntroBlock from "../components/infoBlock";
import FeaturedImage from "../components/featuredImage";
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

export const Head = () => <title>Home Page</title>
