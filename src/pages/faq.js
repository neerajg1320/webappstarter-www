import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FaqHeader from "../components/page-faq/faqHeader";
import FaqList from "../components/page-faq/faqList";
import { graphql } from "gatsby";

const FaqPage = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Navbar />
      <FaqHeader />
      <FaqList faqListData={data} />
      <Footer />
    </>
  );
};

export default FaqPage;

export const Head = () => <title>FAQ Page</title>;

export const faqListQuery = graphql`
  query MyQuery {
    allFaqsJson {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`;

// console.log(faqLists);
