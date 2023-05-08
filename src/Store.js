import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailsReducer, productCategoryReducer } from "./reducers/productReducer";
import { userReducer,profileReducer,forgotPasswordReducer,resetPasswordReducer } from "./reducers/userReducer";
import {cartReducer} from "./reducers/cartReducer";
const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    productCateory: productCategoryReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer, 
    resetPassword: resetPasswordReducer,
    cart: cartReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
}
const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;