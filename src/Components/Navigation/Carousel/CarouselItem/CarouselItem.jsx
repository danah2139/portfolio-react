import React from "react";
import styles from "./CarouselItem.module.css";



function CarouselItem({ item, xLoc, elementCount }){
  const itemStyle = {
    transform: `translateX(${xLoc}%)`,
    width: `${100 / elementCount}%`,
  };

  return (
    <div style={itemStyle} className={styles.item}>
      {item}
    </div>
  );
}

export default CarouselItem;
