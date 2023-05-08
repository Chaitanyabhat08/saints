import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/userConstant';

export const addItemToCart = (id, quantity) => async(dispatch,getState) => {
    try {
        const { data } = await axios.get(`/api/v1/products/getProductDetails/${id}`);
        dispatch({
            type: LOGIN_SUCCESS, payload: {
                product: data.prduct._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                stock: data.product.stock,
                quantity,
            },
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE, payload: error.response
        });
    }
}