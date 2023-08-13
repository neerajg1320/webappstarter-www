import React from 'react';
import * as styles from './styles.module.scss';
import Container from '../container';

const IntroBlock = () => {
  return (
    <div className={styles.introBlock}>
      <Container size="small">
        <h1 className={styles.introBlockTitle}>
          Web Application <span>Starter Templates</span> for a <span>quick start</span>
        </h1>
        <a className={styles.cta} href="/">Get in touch</a>
      </Container>
    </div>
  );
}

export default IntroBlock;