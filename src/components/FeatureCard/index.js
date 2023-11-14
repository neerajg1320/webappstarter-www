import * as React from "react";
import * as styles from "./styles.module.scss";

const FeatureCard = ({ desc, nChild, imgUrl, heading }) => {
  return (
    <div
      className={`${styles.featureCard} ${
        nChild % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={styles.imgBox}>
        <img src={imgUrl} className={styles.featureCardImg} />
      </div>
      <div className={styles.headingDesc}>
        <h3 className={styles.cardHeading}>{heading}</h3>
        <p className={` ${styles.featureDescription} font-bold`}>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
