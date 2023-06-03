import React , { useState } from 'react';
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../actions/cartAction';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Product = ({ product }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const addToCartHandler = (id, itemsCount) => {
        dispatch(addItemToCart(id, itemsCount));
        alert.success("Items added successfully");
    }
    const [isLiked, setIsLiked] = useState(false);
    let options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "Tomato",
        size: window.innerWidth < 300 ? 10 : 15,
        value: product.rating,
        isHalf: true
    }

    const addToWishlist = (productId) => {
        // Add your logic for adding to the wishlist here
        // You can also update the state based on the success of the operation

        setIsLiked(!isLiked); // Toggle the liked state
    };
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
                    <FavoriteIcon
                        id="heart"
                        onClick={() => addToWishlist(product._id)}
                        style={{ color: isLiked ? 'red' : 'gray' }}
                    />
                    <Button className='btn' onClick={() => addToCartHandler(product._id,1)}>Add to cart</Button>
                </div>
                <div>
                    <Button className='btn' onClick={()=> console.log('clicked buy')}>Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;