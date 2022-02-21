import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../App";

function ProductsList(props) {
  const { products } = useSelector((state) => state);

  // const { products } = props;
  return (
    <>
      <select onChange={props.handleChangeFilter}>
        <option value="all">All</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
      </select>
      <div className="products">
        {products.length === 0 && <div>There is No Products </div>}

        {props.filteredProducts.length == 0
          ? products.map((product) => (
              <div className="product-item" key={product.id}>
                <NavLink to={`/products/${product.id}`}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.desc}</p>
                </NavLink>
                <button onClick={() => props.handleDeleteProduct(product.id)}>
                  delete
                </button>
              </div>
            ))
          : props.filteredProducts.map((product) => (
              <div className="product-item" key={product.id}>
                <NavLink to={`/products/${product.id}`}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.desc}</p>
                </NavLink>
                <button onClick={() => props.handleDeleteProduct(product.id)}>
                  delete
                </button>
              </div>
            ))}

        {}
      </div>
    </>
  );
}

export default ProductsList;
