import React from "react";
import styles from "./Card.module.css";


function Card({
  children,
  className,
  width,
  height,
  horizontal,
}) {
  return (
    <div
      className={`${styles.card} ${className} ${
        horizontal ? styles.horizontal : ""
      }`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
}

export default Card;
