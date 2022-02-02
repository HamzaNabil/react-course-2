import React from "react";
import { NavLink } from "react-router-dom";

function ProductsList(props) {
  return (
    <div className="products">
      {props.products.map((product) => (
        <NavLink
          to={`/products/${product.id}`}
          className="product-item"
          key={product.id}
        >
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.desc}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default ProductsList;
