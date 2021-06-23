import React from "react";
import Card from "../../../Components/Containers/Card/Card";
import CardBody from "../../../Components/Containers/Card/CardBody";
import CardHeader from "../../../Components/Containers/Card/CardHeader";
import CardTitles from "../../../Components/Containers/Card/CardTitles";
import useWindowDim from "../../../hooks/useWindowDim";
import styles from "./CategoryCard.module.css";


function CategoryCard({ category, children, horizontal }){
  const { width } = useWindowDim();

  const dimention = width >= 480 ? 60 : 40;
  return (
    <Card horizontal={horizontal} className={styles.category_name}>
      <CardHeader className={styles.header}>
        <div className={styles.icon}>
          {category.icon({
            color: "#fff",
            width: dimention,
            height: dimention,
          })}
        </div>
        <div className={styles.icon}>
          <CardTitles title={category.name} />
        </div>
      </CardHeader>
      <CardBody className={styles.body}>{children}</CardBody>
    </Card>
  );
}

export default CategoryCard;
