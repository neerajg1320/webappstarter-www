import * as styles from "./styles.module.scss";
import React from 'react';
import Container from "../container";

const FeaturedImage = () => {
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img src="https://source.unsplash.com/random" alt="test-image"/>
      </Container>
    </div>
  );
}

export default FeaturedImage;