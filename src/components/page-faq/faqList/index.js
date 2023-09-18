import * as styles from "./styles.module.scss";
import React, {useMemo} from 'react';
import Container from "../../container";

const FaqList = () => {
  const faqs = useMemo(() => {
    return [
      {
        "question": "What is webappstarter.com?",
        "answer": "It is a Reactjs Integrated Development Environment (IDE) on your browser. The files are edited, bundled and previewed in one browser tab."
      },
      {
        "question": "What is Playground?",
        "answer": "In case you just want to try a web project quickly without creating a user account etc then same can be done in Playground. It provides a framework environment like react. You can create and preview a webapp."
      },
      {
        "question": "What is Studio?",
        "answer": "In case user wants to create web apps and save them for later use or modification then Studio is the way to go. The user will have to register and login. Then they can create and save project.  It provides a framework environment like react. You can create and preview a webapp."
      },
      {
        "question": "What is difference between Playground and Studio?",
        "answer": "In Playground, the users will create temporary project without the intention to save them for later use. Once the session is gone, the user cannot access project anymore. Also in playground project a user can create a max of 5 files. \n" +
            "There are no above limitations in Studio, how a user has to create an account and login to create projects which will be persisted."
      }
    ]
  }, []);
  
  return (
    <div className={styles.faqList}>
      <Container>
        <div className={styles.faqListInner}>
          {
            faqs.map((faq, index) => {
              return (<div key={index} className={styles.faqItem}>
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
