import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';

const Product = ({ product }) => {
    let options = {
    edit: false,
    color:"rgba(20,20,20,0.1)",
    activeColor: "Tomato",
    size:window.innerWidth < 600 ? 20:25,
    value: product.rating,
    isHalf:true
}
    return (
        <div className="productDiv">
        <Link className="productCard" to={`/products/getProductDetails/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /><span>({ product.numOfReviews } Reviews)</span>
            </div>
            <span>{`₹${product.price}`}</span>
            </Link>
        </div>
  )
}


export default Product