import Axios from "axios";
import { CART_EMPTY } from "../Constants/cartConstant";
import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_REQUEST,
    ORDER_MINE_LIST_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
} from "../Constants/orderConstants";

export const createOrderAction = (order) => async(dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        //console.log(userInfo, "User Information -----------------(1)");
        const { data } = await Axios.post("/api/orders", order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem("cartItems");
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        });
    }
};

export const detailsOrderAction = (orderId) => async(dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
        userSignin: { userInfo },
    } = getState();
    // console.log(userInfo, "User Information ---------------- (2)");
    try {
        const { data } = await Axios.get(`/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
};

export const payOrderAction = (order, paymentResult) => async(
    dispatch,
    getState
) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(
            `/api/orders/${order._id}/pay`,
            paymentResult, {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            }
        );
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
};

export const listOrderMine = () => async(dispatch, getState) => {
    dispatch({ type: ORDER_MINE_LIST_REQUEST });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get('/api/orders/mine', {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        })
        dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
    }
};