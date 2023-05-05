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
import  Banner  from './Banner';
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(state => state.products);
  const categoriesForHer = [
    {
      name: "Tshirts", code: "Tshirt", images: [{ url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr_I2tfnXHGIhtnzi3Zr8hwjX7b8jR7fnTNPirZrq-f3vnCgyWIOjGvl4vgSPMkN1yc_iLMhKeiUfmCeJfbny_P7reL9yFW0kpL4ctYsA&usqp=CAE' }], gender: 'F'
    },
    { name: "Sweatshirts", code: "SweatShirts", images: [{ url: 'https://cdn.shopify.com/s/files/1/0076/6040/4818/products/0-modelinfo-tamika-us2_eb86e6ac-da08-48eb-a415-c27396c051a1_450x610_crop_center.jpg?v=1674516904' }], gender: 'F' },
    { name: "Shirts", code: "Shirts", images: [{ url: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1683208757_2097830.jpg?format=webp&w=480&dpr=2.0' }], gender: 'F' },
    {
      name: "Kurtis", code: "Kurtis", images: [{ url: 'https://cdn.shopify.com/s/files/1/0561/7926/1589/products/houseofchikankari-zainabmulprintedkurta-grey1_1800x1800.png?v=1678948318' }], gender: 'F' },
  ];
  const categoriesForHim = [{
    name: "Sweatshirts", code: "SweatShirts", images: [{ url: 'https://divinebonds.in/wp-content/uploads/2022/09/oversized-hoodie-mockup-of-a-serious-couple-sitting-in-cubes-at-a-studio-m26223.jpg' }], gender: 'M'},
    { name: "Shirts", code: "Shirts", images: [{ url: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Amin4179_1800x1800.jpg?v=1672146549' }], gender: 'M' },
    { name: "Tshirts", code: "Tshirt", images: [{ url: 'https://cdn.shopify.com/s/files/1/0533/9578/3843/products/20220206_152500_900x.jpg?v=1673016320' }], gender: 'M' },
    { name: "Pants", code: "Pants", images: [{ url: 'https://cdn.shopify.com/s/files/1/0752/6435/products/Layer8_6bb8e88c-6836-42bc-af3b-994b9a733be7_1452x1799.jpg?v=1661151328' }], gender: 'M' },
  ];
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
          </Fragment> :<> <Fragment>
          <MetaData title="Saints&Sinners"/>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Contact US <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Find A Store <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MEN
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Shirts</a>
                  <a className="dropdown-item" href="#">T-Shirts</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Trousers</a>
                  <a className="dropdown-item" href="#">Shorts</a>

                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WOMEN
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Pants</a>
                  <a className="dropdown-item" href="#">Dresses</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Sports Wear</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  KIDS
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Infants</a>
                  <a className="dropdown-item" href="#">Girls</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Boys</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              
            </form>
          </div>
        </nav>
            {/* <div><ImageCarousel images={images} /></div> */}
            <div><Banner /></div>
        <div className="Banner">
          <p>Welcome To <b>Saints&Sinners</b></p>
          <h1> Find Our Products Below</h1>
          <a href="#container">
            <button>
              <BsFillSaveFill/>
            </button>
              </a>
            </div>
          </Fragment>
          <div className="categorySection">
            <h2 className="homeHeading">Featured Categories</h2>
            <div className="container1" id="container1">
              <h3>For Him</h3>
              {categoriesForHim.map(category => (
                <CategoryCard category={category} />
              ))}
              </div>
              <div className="container1" id="container1">
                <h3>For Her </h3>
                {categoriesForHer.map(category => (
                  <CategoryCard category={category} />
                ))}
              </div>
            </div>
            </>
      }
      </Fragment>
  )
}

export default Home