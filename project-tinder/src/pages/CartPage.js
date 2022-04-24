import React from "react";
import Cart from "../components/cart/Cart";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import "../assets/Cart.css";


const CartPage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <Cart />
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;
