import React, { Fragment,useEffect } from 'react';
import { BsFillSaveFill } from 'react-icons/bs';
import './Home.css';
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import { getProduct,clearErrors } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(state => state.products)
  useEffect(() => {
    if (error) {
        alert.show(error);
        dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert])
    return (
      <Fragment>
        {loading ?
          <Fragment>
            <Loader />
          </Fragment> : <Fragment>
        <MetaData title="Saints&Sinners"/>
        <div className="Banner">
          <p>Welcome To <b>Saints&Sinners</b></p>
          <h1> Find Our Products Below</h1>
          <a href="#container">
            <button>
              <BsFillSaveFill/>
            </button>
          </a>
        </div>
            <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products && products.map(product => (
              <Product product={product} /> 
          ))}
        </div>
      </Fragment>}
      </Fragment>
  )
}

export default Home