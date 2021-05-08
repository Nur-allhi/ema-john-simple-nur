import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productkey } = useParams();
  const product = fakeData.find((pd) => pd.key === productkey);
  console.log(product);
  return (
    <div>
      <h1>{productkey} - Your Product Details</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
