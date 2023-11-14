import * as React from "react";
import * as styles from "./styles.module.scss";
import { urlStudioPlayground, urlSignup, urlLogin } from "../../config/global";
import Button from "../Button";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // console.log(`Navbar render:`, styles);

  const [isToggleMenu, setIsToggleMenu] = React.useState(false);

  const handleToggleClick = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  return (
    <div className={styles.navbar + "  flex items-center justify-between"}>
      <div className={"flex justify-center items-center " + styles.logoMenu}>
        
        <button className={styles.menu} onClick={handleToggleClick} >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <Link className={styles.logo} to="/">
          WEBAPP STARTER
        </Link>
      </div>

      <ul className={`${styles.list}  ${isToggleMenu ? " " : styles.moveLeft}`}>
        <li className={styles.listItem}>
          <a className={styles.navItem} href={`${urlStudioPlayground}`}>
            Playground
          </a>
        </li>
        {/* <li className={styles.listItem}>
          <a className={styles.navItem} href={`${urlStudio}`}>
            Studio
          </a>
        </li> */}
        <li className={styles.listItem}>
          <Link className={styles.navItem} to="/faq">
            FAQ
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.navItem} to="/team">
            Team
          </Link>
        </li>
      </ul>

      <div className={`${styles.loginSignupButtons} flex `}>
        <a href={urlLogin}>
          <Button title="Login" buttonClass="loginButton" />
        </a>
        <a href={urlSignup}>
          <Button title="Sign Up" buttonClass="signupButton" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
