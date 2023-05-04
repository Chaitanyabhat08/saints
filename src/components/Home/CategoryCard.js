import React from 'react';
import { Link } from "react-router-dom";
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  console.log(category)
  return (
    <div className="CategoryDiv">
      <Link className="CategoryCard" to={`/api/v1/products/getallproducts?&category=${category.code}`}>
        <img src={category.images[0].url} alt={category.name} />
        <p>{category.name}</p>
      </Link>
    </div>
  )
}
export default CategoryCard;