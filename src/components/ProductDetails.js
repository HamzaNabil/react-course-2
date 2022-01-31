import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log(params);
  return <div>Product Details {params.id}</div>;
}

export default ProductDetails;
