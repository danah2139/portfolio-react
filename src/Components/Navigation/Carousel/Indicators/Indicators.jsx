import React from "react";
import styles from "./Indicators.module.css";

function Indicators({
  length,
  elementCount,
  xLoc,
  setXLoc,
}){
  const indicatorItems = [];
  const count = Math.ceil(length / elementCount) - 1;
  const index = Math.abs(xLoc) / (100 * elementCount);

  const rollToView = (selectedIndex) => {
    setXLoc(-selectedIndex * elementCount * 100);
  };

  for (let i = 0; i <= count; i++) {
    indicatorItems.push(
      <div
        onClick={() => rollToView(i)}
        className={`${styles.indicator} ${index === i ? styles.selected : ""}`}
      />
    );
  }

  return <div className={styles.indicators}>{indicatorItems}</div>;
}

export default Indicators;
