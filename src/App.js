import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create" element={<AddProduct />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
