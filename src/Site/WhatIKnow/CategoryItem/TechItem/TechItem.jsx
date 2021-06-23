import React from "react";
import styles from "./TechItem.module.css";


function TechItem({ technology }){
  return (
    <div className={styles.item}>
      <img
        className={styles.icon}
        src={technology.image}
        alt={technology.name}
      />
      {technology.description && (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: technology.description }}
        />
      )}
    </div>
  );
}

export default TechItem;
