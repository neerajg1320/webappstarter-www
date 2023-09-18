import * as React from "react";
import * as styles from './styles.module.scss';
import Container from "../container";
import { getCurrentYear } from "../../utils/date";

const Footer = () => {
  // console.log(`Navbar render:`, styles);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <p>&copy; Webapp Starter {getCurrentYear()}</p>
          <p><a href="/">Made for Community</a></p>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;