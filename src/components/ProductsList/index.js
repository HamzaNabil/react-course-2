import React from "react";
import "./ProductsList.css";
import ProductDetails from "../ProductDetails";

function ProductsList(props) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return <ProductDetails item={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductsList;
