import React from 'react';
import * as styles from './styles.module.scss';
import {urlStudioPlayground} from "../../../config/global";

const IntroBlock = () => {
  return (
    <div className={styles.introBlock}>
        <h1 className={styles.introBlockTitle}>
          Javascript, <span>Reactjs IDE</span> on your browser
        </h1>
        <a className={styles.cta} href={`${urlStudioPlayground}`}>try  <span className={styles.emphasize}>Playground</span></a>
    </div>
  );
}

export default IntroBlock;