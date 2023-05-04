import React, { Fragment,useEffect } from 'react';
import { BsFillSaveFill } from 'react-icons/bs';
import './Home.css';
import Product from './ProductCard.js';
import CategoryCard from './CategoryCard.js';
import MetaData from '../layout/MetaData';
import { getProduct,clearErrors } from '../../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import images from './Images';
import ImageCarousel from './ImageCarousel';
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(state => state.products);
  const categories = [
    {
      name: "Tshirts", code: "Tshirt", images: [{ url: 'https://assets.ajio.com/medias/sys_master/root/20220907/KjI5/6317a235f997dd1f8de7f4c0/-473Wx593H-410326856-1510-MODEL.jpg'}]},
    {
      name: "Gadgets", code: "Gadgets", images: [{ url:'https://ksr-ugc.imgix.net/assets/028/214/522/b972ed4c1d4ed1cfc5d95b082331d529_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1582627824&gif-q=50&q=92&s=b8da14c658aa6c4692271d40f9a608ff'}] },
    { name: "Sweatshirts", code: "SweatShirts", images: [{ url:'https://cdn.shopify.com/s/files/1/0076/6040/4818/products/0-modelinfo-tamika-us2_eb86e6ac-da08-48eb-a415-c27396c051a1_450x610_crop_center.jpg?v=1674516904'}] },
    { name: "Shirts", code: "Shirts", images: [{ url:'https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Amin4179_1800x1800.jpg?v=1672146549'}] },
    // { name: "Pants", code: "Pants", images: [] },
    // { name: "Sweatpants", code: "SweatPants", images: [] },
    // { name: "Caps", code: "Capes", images: [] },
    // { name: "Socks", code: "Socks", images: [] },
    // { name: "Active Wear", code: "ActiveWear", images: [] }
  ]
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
        <div><ImageCarousel images={images} /></div>
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
          {categories.map(category => (
            <CategoryCard category={category}/>
          ))}
        </div>
      </Fragment>}
      </Fragment>
  )
}

export default Home