import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import WebFont from 'webfontloader';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import Products from './components/Products/Products.js';
import Search from './components/Search/Search.js';
import LoginSignup from './components/User/loginSignup';
import Store from "./Store";
import { LoadUser } from './actions/userAction';
import UserOptions from './components/layout/Header/UserOptions.js';
import Profile from './components/User/Profile.js';
// import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfileOption from './components/User/UpdateProfileOption.js';
import UpdatePasswordOption from './components/User/UpdatePasswordOption.js';
import ForgotPasswordOption from './components/User/ForgotPasswordOption.js';
import ResetPasswordOption from './components/User/ResetPasswordOption.js';
import Navbar from '../src/NavBar';

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    Store.dispatch(LoadUser())
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/getProductDetails/:id" element={<ProductDetails />} render={(props) => (
          <ProductDetails id={props.match.params.id} />
        )}></Route>
        <Route path="/products/getallproducts" element={<Products />} ></Route>
        <Route path="/products/getallproducts/:keyWord" element={<Products />} ></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/users/loginUser" element={<LoginSignup />}></Route>
        {user && isAuthenticated && <Route path="/users/getMyDetails" element={<Profile />}></Route>}
        {user && isAuthenticated && <Route path="/users/updateProfile" element={<UpdateProfileOption />}></Route>}
        {user && isAuthenticated && <Route path="/users/updatePassword" element={<UpdatePasswordOption />}></Route>}
        <Route path="/users/forgotPassword" element={<ForgotPasswordOption />}></Route>
        <Route path="/users/resetPassword/:token" element={<ResetPasswordOption />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
