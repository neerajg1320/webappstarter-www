import * as styles from "./styles.module.scss";
import React, {useMemo} from 'react';
import Container from "../../container";

const FaqList = () => {
  const faqs = useMemo(() => {
    return [
      {
        "question": "What is webappstarter.com?",
        "answer": "The site webappstarter.com intends to provide starting template for web applications. Currently templates for react-apps are supported. The project is in very initial and we intend to support other existing frameworks like Angularjs, Vuejs, Svelte, Solid etc"
      },
      {
        "question": "What is webappstarter.com?",
        "answer": "The site webappstarter.com intends to provide starting template for web applications. Currently templates for react-apps are supported. The project is in very initial and we intend to support other existing frameworks like Angularjs, Vuejs, Svelte, Solid etc"
      }
    ]
  })
  
  return (
    <div className={styles.faqList}>
      <Container>
        <div className={styles.faqListInner}>
          {
            faqs.map((faq, index) => {
              return (<div className={styles.faqItem}>
                <p className={styles.question}>
                  {index+1}.{faq.question}
                </p>
                <p className={styles.answer}>
                  {faq.answer}
                </p>
              </div>);
            })
          }

        </div>
      </Container>
    </div>

  );
}

export default FaqList;
