import React from 'react';
import { Link } from "react-router-dom";
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const keyWord = '';
  const currentPage = 1;
  const price = [0, 3000];
  const rating = 1;
  return (
    <div className="CategoryDiv">
      <Link className="CategoryCard" to={`/api/v1/products/getallproducts?keyword=${keyWord}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category.code}&rating[gte]=${rating}`}>
        <img src={category.images[0].url} alt={category.name} />
        <p>{category.name}</p>
      </Link>
    </div>
  )
}
export default CategoryCard;