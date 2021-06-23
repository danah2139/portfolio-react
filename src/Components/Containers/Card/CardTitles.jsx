import React from "react";
import styles from "./Card.module.css";

function CardTitles({ title, subTitle }){
  return (
    <div className={styles.card_titles}>
      <h2>{title}</h2>
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  );
}

export default CardTitles;
