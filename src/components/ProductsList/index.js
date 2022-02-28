import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteProduct,
  filterProduct,
} from "../../redux/actions/productsAction";

function ProductsList(props) {
  const { products, filteredProducts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleChangeFilter = (e) => {
    if (e.target.value == "all") {
      dispatch(filterProduct("all"));
    } else {
      dispatch(filterProduct(e.target.value));
    }
  };

  return (
    <>
      <select onChange={handleChangeFilter}>
        <option value="all">All</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
      </select>
      <div className="products">
        {products && products.length === 0 && <div>There is No Products </div>}

        {filteredProducts.length == 0
          ? products.map((product) => (
              <div className="product-item" key={product.id}>
                <NavLink to={`/products/${product.id}`}>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.desc}</p>
                </NavLink>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  delete
                </button>
              </div>
            ))
          : filteredProducts.map((product) => (
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
