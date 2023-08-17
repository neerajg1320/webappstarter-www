import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FaqHeader from "../components/page-faq/faqHeader";
import FaqList from "../components/page-faq/faqList";

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

