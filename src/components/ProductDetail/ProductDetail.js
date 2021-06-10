import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productkey } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://ema-john-nur.herokuapp.com/product/${productkey}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productkey]);

  return (
    <div>
      <h1>{productkey} - Your Product Details</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
