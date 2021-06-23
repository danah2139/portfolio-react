import React from "react";
import TechItem from "./TechItem/TechItem";
import styles from "./TechList.module.css";


function TechList({ technologies }){
  return (
    <div className={styles.list}>
      {technologies.map((technology, index) => (
        <TechItem key={index} technology={technology} />
      ))}
    </div>
  );
}

export default TechList;
