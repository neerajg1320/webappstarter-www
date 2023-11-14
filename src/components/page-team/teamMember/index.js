import React from "react";
import * as styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const index = ({
  name,
  description,
  githubUrl,
  imgUrl,
  twitterUrl,
  role,
  linkedInUrl,
  idx,
}) => {
  console.log(styles);
  return (
    <div key={idx} className={styles.member}>
      <img src={imgUrl} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.iconList}>
        <li>
          <a href={githubUrl} target="_blank" className={styles.cta}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href={linkedInUrl} target="_blank" className={styles.cta}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href={twitterUrl} target="_blank" className={styles.cta}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default index;
