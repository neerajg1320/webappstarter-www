import * as React from "react";
import * as styles from './styles.module.scss';
import Container from "../container";
import {studioPlaygroundUrl, studioUrl} from "../../config/global";

const Navbar = () => {
  console.log(`Navbar render:`, styles);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <div className={styles.navbarLeft}>
            <a className={styles.logo} href="#">WEBAPP STARTER</a>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href={`${studioPlaygroundUrl}`}>Playground</a></li>
              <li className={styles.listItem}><a href={`${studioUrl}`}>Studio</a></li>
              <li className={styles.listItem}><a href="#">FAQ</a></li>
            </ul>
          </div>
          <a className={styles.cta} href="#">Contact</a>
        </div>
      </Container>
    </div>
  )
};

export default Navbar;