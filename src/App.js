import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails.js';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, []);
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/getProductDetails/:id" element={<ProductDetails />} render={(props) => (
          <ProductDetails id={props.match.params.id} />
        )}></Route>
      </Routes>
      <Footer />
    </Router> 
  );
}

export default App;
