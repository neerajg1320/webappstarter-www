import * as React from "react";
import * as styles from './styles.module.scss';
import Container from "../container";
import {urlStudioPlayground, urlStudio, urlSignup} from "../../config/global";
import {Link} from "gatsby";

const Navbar = () => {
  // console.log(`Navbar render:`, styles);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbarInner}>
          <div className={styles.navbarLeft}>
            <Link className={styles.logo}  to="/">WEBAPP STARTER</Link>
            <ul className={styles.list}>
              <li className={styles.listItem}><a className={styles.navItem} href={`${urlStudioPlayground}`}>Playground</a></li>
              <li className={styles.listItem}><a className={styles.navItem} href={`${urlStudio}`}>Studio</a></li>
              <li className={styles.listItem}><Link className={styles.navItem}  to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <a className={styles.cta} href={`${urlSignup}`}>Sign Up</a>
        </div>
      </Container>
    </div>
  )
};

export default Navbar;