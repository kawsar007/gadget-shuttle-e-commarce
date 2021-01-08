import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import { signoutAction } from "./Store/Actions/UserAction";
import AboutUs from "./ViewScreen/AboutUs";
import CarouselScreen from "./ViewScreen/Carousel/CarouselScreen";
import CartScreen from "./ViewScreen/CartScreen";
import ContactScreen from "./ViewScreen/ContactScreen";
import HomeScreen from "./ViewScreen/Home";
import OrderHistoryScreen from "./ViewScreen/OrderHistoryScreen";
import OrderScreen from "./ViewScreen/OrderScreen";
import PaymentMethodScreen from "./ViewScreen/PaymentMethodScreen";
import PlaceOrderScreen from "./ViewScreen/PlaceOrderScreen";
import ProductScreen from "./ViewScreen/ProductScreen";
import ProfileScreen from "./ViewScreen/ProfileScreen";
import RegisterScreen from "./ViewScreen/RegisterScreen";
import ShippingAddressScreen from "./ViewScreen/ShippingAddressScreen";
import SigninScreen from "./ViewScreen/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin; 

  const dispatch = useDispatch();
  // uisrey  fghfhgjhg

  const signoutHandler = () => {
     dispatch(signoutAction())
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
             Gadget Shuttle 
            </Link>
          </div>
          {/* <div>
             <Link className="headerItem" to="/">Home</Link>
             <Link className="headerItem" to="/about">About Us</Link>
             <Link className="headerItem" to="/contact">Contact</Link>             
          </div> */}
          <div className="cartSignIn">
            <Link to="/cart">
              cart <i class="fa fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
                <div className="dropdown">
                    <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                         <Link to="/profile">User Profile</Link>
                      </li>
                      <li>
                        <Link to="/orderhistory">Order History</Link>
                      </li>
                      <li>
                    <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                    </Link>
                    </li>
                    </ul>
                 
                </div>
            ) : (
              <Link to="/signin">signin</Link>
            )}
          </div>
        </header>
        
        <main>
          
          <Route path="/" exact component={CarouselScreen}></Route> 
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/about" component={AboutUs}/>
          <Route path="/contact" component={ContactScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>      
          <Route path="/" exact component={HomeScreen} />          
        </main>
        <footer className="row center">© 2020 All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;