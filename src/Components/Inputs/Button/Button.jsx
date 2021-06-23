import React from "react";
import styles from "./Button.module.css";


function Button({ text, className, onClick }) {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
