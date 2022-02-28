import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/actions/productsAction";

function AddProduct(props) {
  const navigate = useNavigate(); // Not Work on Class Based
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    let product = {
      id: products.length + 1,
      title: title,
      price: price,
      desc: desc,
    };
    addProduct(product, dispatch);
  };

  return (
    <form
      className="product-form"
      onSubmit={(e) => {
        handleAddProduct(e);
        navigate("/products");
      }}
    >
      <input
        type="text"
        id="title"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Desc"
        id="desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Price"
        id="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="submit" value="Add Product" />
    </form>
  );
}
export default AddProduct;
