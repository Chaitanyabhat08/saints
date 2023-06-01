import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../actions/cartAction';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const Product = ({ product }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const addToCartHandler = (id, itemsCount) => {
        dispatch(addItemToCart(id, itemsCount));
        alert.success("Items added successfully");
    }
    let options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "Tomato",
        size: window.innerWidth < 300 ? 10 : 15,
        value: product.rating,
        isHalf: true
    }
    const addToWishlist = () => {
        
    }
    return (
        <div className="productDiv">
            <Link className="productCard" to={`/products/getProductDetails/${product._id}`} style={{ textDecoration: 'none' }}>
                <img src={product.images[0].url} alt={product.name} />
                <p>{product.name}</p>
                <div>
                    <ReactStars {...options} /><span>({product.numOfReviews} Reviews)</span>
                </div>
                <span>{`₹${product.price}`}</span>
            </Link>
            <div className='buttonSec'>
                <div className='button'>
                    <HeartOutlined onClick={console.log('clicked')} />
                    <Button className='btn' onClick={() => addToCartHandler(product._id,1)}>Add to cart</Button>
                </div>
                <div>
                    <Button className='btn' onClick={console.log('clicked buy')}>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;