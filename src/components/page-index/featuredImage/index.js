import * as styles from "./styles.module.scss";
import React from 'react';
import Container from "../../container";
import {urlImage} from "../../../config/global";

const FeaturedImage = () => {
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img src={`${urlImage}`} alt="random"/>
      </Container>
    </div>
  );
}

export default FeaturedImage;