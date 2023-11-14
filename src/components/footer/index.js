import * as React from "react";
import * as styles from './styles.module.scss';
import { getCurrentYear } from "../../utils/date";

const Footer = () => {
  // console.log(`Navbar render:`, styles);

  return (
    <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>&copy; Webapp Starter {getCurrentYear()}</p>
          <p><a href="/">Made for Community</a></p>
        </div>
    </footer>
  )
};

export default Footer;