import React from "react";

const Inventory = () => {
  const product = {};
  const handleAddProduct = () => {
    fetch("https://ema-john-nur.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  return (
    <div>
      <form action="">
        <p>
          <span>Name: </span>
          <input type="text" />
        </p>
        <p>
          <span>Price: </span>
          <input type="text" />
        </p>
        <p>
          <span>Quantity: </span>
          <input type="text" />
        </p>
        <p>
          <span>Product-Image: </span>
          <input type="file" />
        </p>
        <button type="submit" onClick={handleAddProduct}>
          Add product
        </button>
      </form>
    </div>
  );
};

export default Inventory;
<h1>This is inventory Comming soon</h1>;
