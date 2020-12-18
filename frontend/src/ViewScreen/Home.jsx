import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Products from "../Components/Products";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import { productListAction } from "../Store/Actions/ProductsActions";
import OurTeam from "../Components/OurTeam";

function HomeScreen() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  // Search 
  const allProducts = products?.filter((product) => {
    return product?.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dispatch(productListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="productHeader">Our Product</h1>
      {/* Search Box Start */}
      <div className="search">
        <input type="checkbox" id="check" />
        <div class="box">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search item"
          />
          <label for="check">
            <i class="fa fa-search"></i>
          </label>
        </div>
      </div>
      {/* Search Box End */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {allProducts.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      )}
      {/* <OurTeam/> */}
    </div>
  );
}

export default HomeScreen;