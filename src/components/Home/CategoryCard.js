import React from 'react';
import { Link } from "react-router-dom";
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const keyword = "";
  return (
    <div className="CategoryDiv">
      <Link className="CategoryCard" to={`/products/getallproducts/${keyword}&category=${category.code}&gender=${category.gender}`}>
        <img src={category.images[0].url} alt={category.name} />
        <p>{category.name}</p>
      </Link>
    </div>
  )
}
export default CategoryCard;