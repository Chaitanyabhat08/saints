import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_FAILURE,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_FAILURE,
    UPDATE_PASSWORD_SUCCESS,
} from "../constants/userConstant";
import axios from 'axios';

export const Login = (email,password) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config ={headers:{"Content-type": "application/json"}}
        const { data } = await axios.post(`/api/v1/users/loginUser`, { email, password }, config);
        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,payload:error.response.data.message});
    }
}

export const Register = (userData) => async(dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });
        const config ={headers:{"Content-type": "multipart/form-data"}}
        const { data } = await axios.post(`/api/v1/users/registerUser`, userData, config);
        dispatch({type:REGISTER_USER_SUCCESS,payload:data.user})
    } catch (error) {
        dispatch({type:REGISTER_USER_FAILURE,payload:error.response.data.message});
    }
}

export const LoadUser = () => async(dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const { data } = await axios.get('/api/v1/users/getMyDetails');
        dispatch({type:LOAD_USER_SUCCESS,payload:data.user})
    } catch (error) {
        dispatch({type:LOAD_USER_FAILURE,payload:error.response.data.message});
    }
}
export const LogOutUser = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/users/logoutUser`);
        dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
        dispatch({type:LOGOUT_USER_FAILURE,payload:error.response.data.message});
    }
}

export const UpdateProfile = (userData) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });
        const config ={headers:{"Content-type": "multipart/form-data"}}
        const { data } = await axios.put(`/api/v1/users/updateProfile`, userData, config);
        dispatch({type: UPDATE_PROFILE_SUCCESS,payload:data.success})
    } catch (error) {
        dispatch({type:UPDATE_PROFILE_FAILURE,payload:error.response.data.message});
    }
}

export const UpdatePassword = (passwords) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });
        const config ={headers:{"Content-type": "application/json"}};
        const { data } = await axios.put(`/api/v1/users/updatePassword`, passwords, config);
        dispatch({type: UPDATE_PASSWORD_SUCCESS,payload:data.success})
    } catch (error) {
        dispatch({type:UPDATE_PASSWORD_FAILURE,payload:error.response.data.message});
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS})
}