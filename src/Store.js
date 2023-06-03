import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailsReducer } from "./reducers/productReducer";
import { userReducer,profileReducer,forgotPasswordReducer,resetPasswordReducer } from "./reducers/userReducer";
import { cartReducer,wishlistReducer } from "./reducers/cartReducer";
import { newOrderReducer } from "./reducers/orderReducer";
const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer, 
    resetPassword: resetPasswordReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    newOrder: newOrderReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
    },
    wishlist: {
        wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
    }
}
const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;