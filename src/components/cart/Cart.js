import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
  }

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h5 className="text-danger">Order Summry</h5>
      <p>Items ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p>
        <small>Shipping: {shipping}</small>
      </p>
      <p>
        <small>Tax: {tax}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
      <br />
      <Link to="/review">
        <button className="add-cart-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> Reveiw Order
        </button>
      </Link>
    </div>
  );
};

export default Cart;
