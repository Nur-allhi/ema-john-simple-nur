import React from "react";
import "./ReviewItem.css";

const ReviewIteam = (props) => {
  const { name, quantity, key, price } = props.product;
  return (
    <div className="review-iteam">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <br />
      <button onClick={() => props.removeProduct(key)} className="add-cart-btn">
        Remove
      </button>
    </div>
  );
};

export default ReviewIteam;
