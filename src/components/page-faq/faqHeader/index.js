import React from 'react';
import * as styles from './styles.module.scss';
import Container from '../../container';

const FaqHeader = () => {
  return (
    <div className={styles.faqHeader}>
      <Container size="small">
        <h1 className={styles.faqHeaderTitle}>
          Frequently Asked Questions
        </h1>
      </Container>
    </div>
  );
}

export default FaqHeader;