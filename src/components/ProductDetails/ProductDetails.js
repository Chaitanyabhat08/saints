import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import './ProductDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import {getProductDetails} from '../../actions/productActions';
import ReactStars from 'react-rating-stars-component';
import Loader from "../layout/Loader/Loader"

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);
    let options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "Tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.rating,
        isHalf: true
    }
    return (
        loading ? <Loader /> 
        :
    <Fragment>
        <div className="ProductDetails">
            <div className="section-1">
                <Carousel>
                    {
                        product.images && product.images.map((item, i) => (
                            <img
                                className="CarouselImage"
                                key={item.url}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
                        ))
                    }
                </Carousel>
            </div>
            <div>
                <div className="detailsBlock-1">
                    <h2>{product.name}</h2>
                    <p>ProductId #{product._id}</p>
                </div>
                <div className="detailsBlock-2">
                    <ReactStars {...options} />
                    <span>({product.numOfReviews})</span>
                </div>
                <div className="detailsBlock-3">
                    <h3>{`$${product.price}`}</h3>
                    <div className="detailsBlock-3-1">
                        <div className="detailsBlock-3-2">
                            <button className='negative'>-</button>
                            <input className="unitInput" value="1" type="number" />
                            <button className='positive'>+</button>
                        </div>{" "}
                        <div className="buttonSet">
                            <button className="addToCart"><b>ADD TO CART</b></button>
                            <button className="buyNow"><b>BUY NOW</b></button>
                        </div>
                    </div>
                    <p>
                        <b>STATUS:{""}</b>
                        <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                            {product.stock < 1 ? "OUT OF STOCK" : "IN STOCK"}
                        </b>
                    </p>
                </div>
                <div className="detailsBlock-4">
                    <b>DESCRIPTION:</b><p>{product.description}</p>
                </div>
                <button className="submitReview">SUBMIT FEEDBACK</button>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetails;