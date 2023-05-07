import React, { Fragment, useEffect, useState } from 'react';
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors, getProduct } from '../../actions/productActions';
import { useAlert } from 'react-alert';
import Loader from '../layout/Loader/Loader';
import Product from "../Home/ProductCard";
import Pagination from 'react-js-pagination';
import MetaData from '../layout/MetaData';

import { Typography, Slider } from '@material-ui/core';
import { Tooltip, Select } from 'antd';
const Option = Select;

const categories = [
    { name: "Tshirts", code: "Tshirt" },
    { name: "Gadgets", code:"Gadgets"},
    { name: "Sweatshirts", code: "SweatShirts" },
    { name: "Shirts", code: "Shirts" },
    { name:"Pants",code: "Pants" },
    { name: "Sweatpants", code: "SweatPants" },
    { name: "Caps", code: "Capes" },
    { name: "Socks", code: "Socks" },
    { name: "Active Wear", code:"ActiveWear" }
]
const Ratings = [
    { name:'4.5 and above',value:'4.5'},
    { name: '4 & above', value: '4' },
    { name: '3 and above', value: 3 },
    { name:'Below 3',value: 0}
]
const Products = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 3000]);
    const [category, setCategory] = useState(null);
    const [sortOpt, SetSortOpt] = useState('Recom');
    const [rating, setRating] = useState();
    const [genderSelected, setGenderSelected] = useState('All');
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }
    const handlegender = (e) => {
        setGenderSelected(e.target.value)
    }
    const priceHandler = (e,newPrice) => {
        setPrice(newPrice);
    }
    function removeFilters (){
        setCurrentPage(1);
        setPrice([0, 3000]);
        setCategory(null);
        setRating();
    }
    const { loading, error, products, productsCount, resultPerPage } = useSelector(state => state.products);
    const {keyWord} = useParams();
    useEffect(() => {
        if (error) { 
            alert.show(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyWord,currentPage,price,category,rating));
    }, [dispatch,keyWord,currentPage,price,category,rating,error,alert]);
    const menuItems = [
        { label: 'Recommended', value: 'Recom' },
        { label: 'Whats new?', value: 'whn' },
        { label: 'Popularity', value: 'pop' },
        { label: 'Price: Low-high', value: 'PLH' },
        { label: 'Price: High-low', value: 'PHL' },
        // ...
    ];
    return (
        <Fragment>
            {
                loading ? <Loader /> :
                    <Fragment>
                        <div className='titleSec'>
                            <MetaData title="Our Products" />
                            <h1 className="productsHeading">Our Products</h1>
                        </div>
                        <div className='sort'>
                            <Select
                                label="Sort By:"
                                name='SORT BY'
                                value={sortOpt}
                                style={{ width: 200 }}
                                placeholder="Sort By:"
                                onChange={SetSortOpt}
                            >
                                {menuItems.map((menu) => (
                                   <Option key={menu.value} value={menu.value} >
                                        <Tooltip placement='top' title={menu.label}>{menu.label}</Tooltip>
                                    </Option>
                                ))}
                            </Select> 
                        </div>
                        <div className='MainSec'>
                            <div className="filterBox">
                                <div className='genderSelection'>
                                    <p>Men</p>
                                            <input type="radio" value="Men" checked={ genderSelected=== 'Men'} onChange={handlegender} placeholder='Men'/>
                                    <p>Women</p> 
                                            <input type="radio" value="Women" checked={genderSelected === 'Women'} onChange={handlegender} />
                                    <p>Kids</p>
                                            <input type="radio" value="Kids" checked={genderSelected === 'Kids'} onChange={handlegender} />
                                           
                                </div>
                            <Typography>Price</Typography>
                                <Slider
                                value={price}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                onChange={priceHandler}
                                min={0}
                                max={3000}
                                step={100}
                                />
                                <hr/>
                                <div className="categoryBox">
                                <Typography>Category</Typography> 
                                <Select
                                    name='Categories'
                                    value={category}
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a Category"
                                    onChange={setCategory}
                                >
                                    {categories.map((category) => (
                                        <Option key={category.code} value={category.code}>
                                            <Tooltip placement='top' title={category.name}>{category.name}</Tooltip>
                                        </Option>
                                    ))}
                                    </Select> 
                                </div>
                                <div className="ratingsBox">
                                <Typography component="legend">Ratings</Typography> 
                                <Select
                                    name='Ratings'
                                    value={rating}
                                    style={{ width: 200 }}
                                    placeholder="Select Ratings"
                                    onChange={setRating}
                                >
                                    {Ratings.map((rating) => (
                                        <Option key={rating.value} value={rating.value}>
                                            <Tooltip placement='top' title={rating.name}>{rating.name}⭐</Tooltip>
                                        </Option>
                                    ))}
                                    </Select> 
                                    </div>
                                
                                <div>
                                    <button className="clearFilters" type="button" onClick={removeFilters}><b>Clear Filters</b></button>
                                </div>
                                </div>
                        <div className="products">
                            {products && products.map((product) =>
                                <Product key={product._id} product={product}/>
                            )}
                        </div>
                    </div>
                        { resultPerPage > 8 ?
                            <div className="paginationBox">
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Previous"
                                    firstPageText="First"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />
                            </div>:<div></div>
                        }
                    </Fragment>
            }
    </Fragment>
  )
}

export default Products