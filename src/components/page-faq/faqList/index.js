import * as styles from "./styles.module.scss";
import React from "react";
import FaqItem from "../faqItem/index";
// import Container from "../../container";

const FaqList = ({ faqListData }) => {
  // console.log(faqListData);

  return (
    <div className={styles.faqList}>
      {/* <Container> */}
      <div className={styles.faqListInner}>
        {faqListData.allFaqsJson.edges.map((faq, index) => {
          return (
            <FaqItem
              question={faq.node.question}
              answer={faq.node.answer}
              idx={index}
            />
          );
        })}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default FaqList;
