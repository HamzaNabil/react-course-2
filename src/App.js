import React, { Component } from "react";
import { data } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(data));
}

let allItems = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

class App extends Component {
  state = {
    products: allItems,
    filteredProducts: [],
    title: "",
    price: "",
    desc: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddProduct = (e) => {
    e.preventDefault();

    // let lastId = this.state.products[this.state.products.length - 1].id;

    this.setState(
      {
        products: [
          ...this.state.products,
          {
            id: this.state.products.length + 1,
            title: this.state.title,
            price: this.state.price,
            desc: this.state.desc,
          },
        ],
      },
      () => {
        localStorage.setItem("products", JSON.stringify(this.state.products));
      }
    );
  };

  handleDeleteProduct = (id) => {
    // 1
    let products = this.state.products.filter((p) => p.id != id);
    this.setState({ products }, () => {
      localStorage.setItem("products", JSON.stringify(this.state.products));
    });
  };

  handleChangeFilter = (e) => {
    if (e.target.value == "all") this.setState({ filteredProducts: [] });
    let products = this.state.products.filter((p) => p.price == e.target.value);
    this.setState({
      filteredProducts: products,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductsList
                  products={this.state.products}
                  filteredProducts={this.state.filteredProducts}
                  handleDeleteProduct={this.handleDeleteProduct}
                  handleChangeFilter={this.handleChangeFilter}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<ProductDetails products={this.state.products} />}
            />
            <Route
              path="/create"
              element={
                <AddProduct
                  handleChange={this.handleChange}
                  handleAddProduct={this.handleAddProduct}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
