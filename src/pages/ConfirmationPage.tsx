import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { asDollarsAndCents } from "../utils";
import { useOrderDetails } from "../context/OrderDetailsContext";
import { useCart } from "../context/CartContext";
import { useCategoryContext } from "../context/CategoryContext";
import "./ConfirmationPage.css";

const ConfirmationPage: React.FC = () => {
  const { orderDetails } = useOrderDetails();
  const { cart } = useCart();
  const { lastSelectedCategoryName } = useCategoryContext();

  if (!orderDetails || !orderDetails.order) {
    return (
      <div id="confirmation">
        <section id="confirmation-invalid">
          <Link to={`/category/${lastSelectedCategoryName}`}>
            <button className="normal-2x-button">Continue Shopping</button>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div id="confirmation">
      <section id="confirmation-summary">
        <h1>Confirmation</h1>
        <p>
          Your confirmation number is {orderDetails.order.confirmationNumber}
        </p>
        <p>{new Date(orderDetails.order.dateCreated).toString()}</p>
      </section>
      <section id="confirmation-order-details">
        <table id="order-details-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.lineItems.map((item, index) => (
              <tr key={`${orderDetails.order.orderId}-${item.productId}`}>
                <td>{orderDetails.products[index].name}</td>
                <td>{item.quantity}</td>
                <td>
                  {asDollarsAndCents(
                    orderDetails.products[index].price * item.quantity
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>-- Delivery Surcharge --</td>
              <td>{asDollarsAndCents(cart.surcharge)}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <strong>Total</strong>
              </td>
              <td>
                <strong>{asDollarsAndCents(orderDetails.order.amount)}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="customer-details">
        <h1>Customer Information</h1>
        <p>
          {orderDetails.customer.name} ({orderDetails.customer.email})
        </p>
        <p>{orderDetails.customer.address}</p>
        <p>{orderDetails.customer.phone}</p>
      </section>
      <section id="confirmation-continue">
        <Link to={`/category/${lastSelectedCategoryName}`}>
          <button className="normal-2x-button">Continue Shopping</button>
        </Link>
      </section>
    </div>
  );
};

export default ConfirmationPage;
