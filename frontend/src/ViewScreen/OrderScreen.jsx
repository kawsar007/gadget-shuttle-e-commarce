import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import {
  detailsOrderAction,
  payOrderAction,
} from "../Store/Actions/OrderAction";
import { ORDER_PAY_RESET } from "../Store/Constants/orderConstants";

function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, error: errorPay, success: successPay } = orderPay;
  const dispatch = useDispatch();

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get("/api/config/paypal");
      console.log(data, "PayPal Data");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order?._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET})
      dispatch(detailsOrderAction(orderId));
    } else {
      if (!order?.isPaid) {
        if (!window?.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, orderId, sdkReady]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrderAction(order, paymentResult));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order?._id}</h1>
      <div className="placeOrderContainer">
        <div className="orderLeft">
          <div className="leftCard">
            <h2>Shipping</h2>

            <p>
              <strong>Name:</strong> {order?.shippingAddress.fullName} <br />
              <strong>Address: </strong> {order?.shippingAddress.address},
              {order?.shippingAddress.city}, {order?.shippingAddress.postalCode}
              ,{order?.shippingAddress.country}
            </p>
            {order?.isDelivered ? (
              <MessageBox variant="success">
                Delivered At {order?.deliveredAt}
              </MessageBox>
            ) : (
              <MessageBox variant="danger">Not Delivered</MessageBox>
            )}
          </div>
          <div className="leftCard">
            <h2>Payment</h2>
            <p>
              <strong>Method:</strong> {order?.paymentMethod}
            </p>
            {order?.isPaid ? (
              <MessageBox variant="success">Paid At {order?.paidAt}</MessageBox>
            ) : (
              <MessageBox variant="danger">Not Paid</MessageBox>
            )}
          </div>
          <div className="leftCard">
            <h2>Order Items</h2>
            <ul>
              {order?.orderItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </div>

                    <div>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="orderRight">
          <div className="rightCard">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${order?.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order?.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order?.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    {" "}
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong> ${order?.totalPrice.toFixed(2)} </strong>
                  </div>
                </div>
              </li>
              {!order?.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                    {errorPay && (
                      <MessageBox variant="danger">{errorPay}</MessageBox>
                    )}
                    {loadingPay &&  <LoadingBox></LoadingBox>}
                      <PayPalButton
                        amount={order?.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderScreen;
// onSuccess={successPaymentHandler}
