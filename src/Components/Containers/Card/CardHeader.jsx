import React from "react";
import styles from "./Card.module.css";

function CardHeader({ children, className }) {
  return <div className={`${styles.card_header} ${className}`}>{children}</div>;
}

export default CardHeader;
