import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(props) {
  const navigate = useNavigate(); // Not Work on Class Based
  return (
    <form
      className="product-form"
      onSubmit={(e) => {
        props.handleAddProduct(e);
        navigate("/products");
      }}
    >
      <input
        type="text"
        id="title"
        placeholder="Enter Title"
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Enter Desc"
        id="desc"
        onChange={props.handleChange}
      />
      <input
        type="number"
        placeholder="Enter Price"
        id="price"
        onChange={props.handleChange}
      />
      <input type="submit" value="Add Product" />
    </form>
  );
}
export default AddProduct;
