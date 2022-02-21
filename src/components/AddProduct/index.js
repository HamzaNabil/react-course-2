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
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Desc"
        id="desc"
        onChange={(e) => props.setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Price"
        id="price"
        onChange={(e) => props.setPrice(e.target.value)}
      />
      <input type="submit" value="Add Product" />
    </form>
  );
}
export default AddProduct;
