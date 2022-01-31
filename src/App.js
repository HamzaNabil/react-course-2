import React, { Component } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import NewProducts from "./components/NewProducts";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/products">Products </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout </NavLink>
          </li>
        </ul>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<NewProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
