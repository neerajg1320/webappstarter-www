import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FaqHeader from "../components/faqPage/faqHeader";
import FaqList from "../components/faqPage/faqList";

const FaqPage = () => {
  return (
      <>
        <Navbar />
        <FaqHeader />
        <FaqList />
        <Footer />
      </>
  );
};

export default FaqPage;

export const Head = () => <title>FAQ Page</title>

