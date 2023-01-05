import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    UPDATE_PROFILE_FAILURE,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PASSWORD_FAILURE,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
} from "../constants/userConstant"
export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated:false,
            }
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user:action.payload
            }
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated:false,
                user: null,
            }
        case LOGIN_FAILURE:
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error:action.payload
            }
        case LOAD_USER_FAILURE:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error:action.payload  
            }
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }
        default:
            return state;
    }
}

export const profileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            case UPDATE_PASSWORD_REQUEST:
            return {
                loading: true,
                isAuthenticated:false,
            }
        case UPDATE_PROFILE_SUCCESS:
            case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated:action.payload,
            }
        case UPDATE_PROFILE_FAILURE:
            case UPDATE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        
        case UPDATE_PROFILE_RESET:
            case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated:false,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }
        default:
            return state;
    }
}