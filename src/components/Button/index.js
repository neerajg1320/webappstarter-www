import * as React from "react";
import * as styles from "./styles.module.scss";

const Button = ({ title, buttonClass }) => {
  return (
    <button
      className={`font-bold border-radius-5 border-none ${styles[buttonClass]}`}
    >
      {title}
    </button>
  );
};

export default Button;
