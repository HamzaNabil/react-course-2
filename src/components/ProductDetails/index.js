import React from "react";
import { useParams } from "react-router-dom";

// All Products
// product id

function ProductDetails(props) {
  const params = useParams();

  let product = props.products.find((p) => p.id == params.id);

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
