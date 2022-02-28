import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// All Products
// product id

function ProductDetails(props) {
  const params = useParams();

  const { products } = useSelector((state) => state);

  let product = products.find((p) => p.id == params.id);

  return (
    <div>
      Product Details
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.desc}</p>
    </div>
  );
}

export default ProductDetails;
