import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import Products from './components/Products/Products.js';
import Search from './components/Search/Search.js';
import LoginSignup from './components/User/loginSignup';
import Shipping from './components/cart/Shipping.js';
import Store from "./Store";
import { LoadUser } from './actions/userAction';
import Profile from './components/User/Profile.js';
import Cart from './components/cart/Cart.js';
import OrderConfirm from './components/cart/OrderConfirm.js';
import Payment from './components/cart/Payment'
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfileOption from './components/User/UpdateProfileOption.js';
import UpdatePasswordOption from './components/User/UpdatePasswordOption.js';
import ForgotPasswordOption from './components/User/ForgotPasswordOption.js';
import ResetPasswordOption from './components/User/ResetPasswordOption.js';
import Navbar from '../src/NavBar';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';


function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/payment/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montesserat", "Droid Sans", "Chilanka"]
      }
    })
    Store.dispatch(LoadUser())
    getStripeApiKey();
  }, []);
  console.log("thisisisis", stripeApiKey)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/getProductDetails/:id" element={<ProductDetails />} render={(props) => (
          <ProductDetails id={props.match.params.id} />
        )}></Route>
        <Route path="/products/getallproducts/" element={<Products />} ></Route>
        <Route path="/products/getallproducts/:keyWord" element={<Products />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/users/loginUser" element={<LoginSignup />}></Route>
        {user && isAuthenticated && <Route path="/users/getMyDetails" element={<Profile />}></Route>}
        {user && isAuthenticated && <Route path="/users/updateProfile" element={<UpdateProfileOption />}></Route>}
        {user && isAuthenticated && <Route path="/users/updatePassword" element={<UpdatePasswordOption />}></Route>}
        {user && isAuthenticated && <Route path="/Cart" element={<Cart />}></Route>}
        <Route path="/users/forgotPassword" element={<ForgotPasswordOption />}></Route>
        <Route path="/users/resetPassword/:token" element={<ResetPasswordOption />}></Route>
        {user && isAuthenticated && <Route path="/users/loginUser/shipping" element={<Shipping />}></Route>}
        {user && isAuthenticated && <Route path="/order/confirm" element={<OrderConfirm />}></Route>}
        {stripeApiKey && user && isAuthenticated && <Route path="/payment/process" element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          }></Route>}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
