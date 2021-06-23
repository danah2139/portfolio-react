import React from "react";
import TechList from "./TechList";
import CategoryCard from "../CategoryCard/CategoryCard";


function CategoryItem({ category }){
  return (
    <CategoryCard category={category}>
      <TechList technologies={category.technologies} />
    </CategoryCard>
  );
}

export default CategoryItem;
