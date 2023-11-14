import "../sass/basic.scss";
import React from "react";
import Navbar from "../components/navbar";
import IntroBlock from "../components/page-index/introBlock";
import Boxes from "../components/Boxes";
import Footer from "../components/footer";
import Features from "../components/Features";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  // console.log("features: ", data);
  return (
    <>
      <Navbar />
      <IntroBlock />
      <Boxes />
      <Features features={data} />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Webapp Starter</title>;

export const features = graphql`
  query MyQuery {
    allFeaturesJson {
      edges {
        node {
          description
          heading
          id
          imgUrl {
            publicURL
          }
        }
      }
    }
  }
`;
