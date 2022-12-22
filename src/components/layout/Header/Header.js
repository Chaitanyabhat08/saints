import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/logo3.jpeg";

const Header = () => {
    return (
        <ReactNavbar
            profileIcon={true}
            profileIconColor="rgba(35, 35, 35,0.8)"
            ProfileIconElement={MdAccountCircle}
            profileIconColorHover= "white"
            searchIcon={true}
            searchIconColor="rgba(35, 35, 35,0.8)"
            SearchIconElement={MdSearch}
            searchIconColorHover= "white"
            cartIcon={true}
            cartIconColor="rgba(35, 35, 35,0.8)"
            CartIconElement={MdAddShoppingCart}
            cartIconColorHover="white"
            cartIconMargin="15px"
            burgerColor="black"
            burgerColorHover="white"
            logo={logo}
            logoWidth="20vmax"
            navColor1="rgb(227, 227, 205)"
            logoHoverSize="20px"
            logoHoverColor="black"
            link1Text="Home"
            link2Text="Product"
            link3Text="Contact"
            link4Text="About"
            link1url="/"
            link2url="/product"
            link3url="/contact"
            link4url="/about"
            link1Size="1.2vmax"
            link1Color="rgba(35,35,35,0.8)"
            nav1justifyContent="flex-end"
            nav2justifyContent="flex-end"
            nav3justifyContent="flex-start"
            link1ColorHover="white"
            link2ColorHover="white"
            link3ColorHover="white"
            link4ColorHover="white"
            link1Margin="2.5vmax"
        />
    );
}
export default Header