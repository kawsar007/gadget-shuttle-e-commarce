import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/CartReducer";
import { orderCreateReducer, orderDetailsReducer, orderMineListReducer, orderPayReducer } from "./Reducers/OrderReducers";
//import { orderCreateReducer } from "./Reducers/OrderReducers";
import {
    productDetailsReducer,
    productListReducer,
} from "./Reducers/ProductsReducers";
import {
    userDetailsReducer,
    userRegisterReducer,
    userSigninReducer,
    userUpdateProfileReducer,
} from "./Reducers/UserReducers";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("userInfo") ?
            JSON.parse(localStorage.getItem("userInfo")) : null,
    },
    cart: {
        cartItems: localStorage.getItem("cartItems") ?
            JSON.parse(localStorage.getItem("cartItems")) : [],
        shippingAddress: localStorage.getItem("shippingAddress") ?
            JSON.parse(localStorage.getItem("shippingAddress")) : {},
        paymentMethod: 'PayPal'
    },
};

const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;