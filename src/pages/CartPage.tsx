import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCategoryContext } from "../context/CategoryContext";
import { asDollarsAndCents } from "../utils";
import { ProductItem } from "../types";
import "./CartPage.css";

const CartPage: React.FC = () => {
  const { cart, dispatch } = useCart();
  const { lastSelectedCategoryName } = useCategoryContext();

  const handleClearCart = (e: any) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_CART" });
  };

  const handleUpdateCart = (product: ProductItem, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", product, quantity });
  };

  return (
    <div className="cart">
      <div id="cart-description">
        <ul>
          <li>
            {cart.numberOfItems > 1 ? (
              <>Your shopping cart contains {cart.numberOfItems} items.</>
            ) : cart.numberOfItems === 1 ? (
              <>Your shopping cart contains 1 item.</>
            ) : (
              <>Your shopping cart is empty.</>
            )}
          </li>
        </ul>
      </div>

      {!cart.empty && (
        <section id="cart-contents">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Points</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.product.productId}>
                  <td>{item.product.name}</td>
                  <td>{item.product.description}</td>
                  <td>
                    <p className="product-points">{item.product.points}</p>
                  </td>
                  <td>{asDollarsAndCents(item.product.price)}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="9"
                      step="1"
                      placeholder="Quantity desired"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateCart(item.product, +e.target.value)
                      }
                    />
                  </td>
                  <td>
                    {asDollarsAndCents(item.product.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul id="cart-totals">
            <li>Cart subtotal: {asDollarsAndCents(cart.subtotal)}</li>
            <li>
              Cart total: <b>{asDollarsAndCents(cart.total)}</b>
            </li>
          </ul>
        </section>
      )}

      <section id="cart-actions">
        {!cart.empty && (
          <button className="normal-2x-button" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}

        <Link to={`/category/${lastSelectedCategoryName}`}>
          <button className="normal-2x-button">Continue Shopping</button>
        </Link>

        {!cart.empty && (
          <Link to="/checkout">
            <button className="emphasized-2x-button">
              Proceed to Checkout
            </button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default CartPage;
