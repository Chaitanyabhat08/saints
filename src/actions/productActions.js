import axios from "axios";
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_ERROR,
    CLEAR_ERROR,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_ERROR,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_CATEGORY_REQUEST,
    PRODUCT_CATEGORY_SUCCESS,
    PRODUCT_CATEGORY_ERROR
} from "../constants/product";

export const getProduct = (keyWord="",currentPage=1,price=[0,3000],category,rating=0) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });
        let link = `/api/v1/products/getallproducts?keyword=${keyWord}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${rating}`;
        if (category) {
          link = `/api/v1/products/getallproducts?keyword=${keyWord}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${rating}`;
        }
        const { data } = await axios.get(link);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_ERROR,
            payload: error.response.data.message,
        })
    }
};
export const getProductCategoryWise = (category) => async (dispatch) => {
    try {
        console.log("it reached action");
        dispatch({ type: PRODUCT_CATEGORY_REQUEST });
        let link = `/api/v1/products/getallproducts/categorywise?category=${category}`;
        const { data } = await axios.get(link);
        console.log("this is data", data);
        dispatch({
            type: PRODUCT_CATEGORY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_ERROR,
            payload: error.response.data.message,
        })
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/v1/products/getProductDetails/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_ERROR,
            payload: error.response.data.message,
        })
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR })
};