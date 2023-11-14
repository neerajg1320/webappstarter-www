import * as styles from "./styles.module.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FaqItem = ({ question, answer, idx }) => {
  const [answerVisible, setAnswerVisible] = useState(false);

  const handleAnswerVisible = () => {
    setAnswerVisible(!answerVisible);
  };

  return (
    <div key={idx} className={styles.faqItem}>
      <p className={styles.question}>
        {/* {index + 1}. */}
        {question}
        <button onClick={handleAnswerVisible} className={styles.arrow}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </p>
      {answerVisible && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

export default FaqItem;
