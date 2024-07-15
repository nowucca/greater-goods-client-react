import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./HeaderCart.css";
import { getSiteImageUrl } from "../utils";

const HeaderCart: React.FC = () => {
  const { cart } = useCart();

  return (
    <div id="header-cart">
      <Link to="/cart-view">
        <img src={getSiteImageUrl("cart-icon.png")} alt="Cart Icon" />
        <div id="cart-count">{cart.numberOfItems}</div>
      </Link>
    </div>
  );
};

export default HeaderCart;
