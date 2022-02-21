import React, { useState, useEffect, createContext } from "react";
import { data } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./components/Home";
import AddProduct from "./components/AddProduct";
import Counter2 from "./components/Hooks/Counter";
import Home from "./components/Home";

import { Provider } from "react-redux";
import store from "./redux/store";

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(data));
}

let allItems = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

export const DataContext = createContext();

function App() {
  const [products, setProducts] = useState(allItems);
  const [filteredProducts, setFilterProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: products.length + 1,
        title: title,
        price: price,
        desc: desc,
      },
    ]);
  };

  const handleDeleteProduct = (id) => {
    let deleteProducts = products.filter((p) => p.id != id);
    setProducts(deleteProducts);
  };

  const handleChangeFilter = (e) => {
    if (e.target.value == "all") setFilterProducts([]);
    let filtered = products.filter((p) => p.price == e.target.value);
    setFilterProducts(filtered);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter2 />} />
            <Route
              path="/products"
              element={
                <ProductsList
                  products={products}
                  filteredProducts={filteredProducts}
                  handleDeleteProduct={handleDeleteProduct}
                  handleChangeFilter={handleChangeFilter}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} />}
            />
            <Route
              path="/create"
              element={
                <AddProduct
                  setTitle={setTitle}
                  setPrice={setPrice}
                  setDesc={setDesc}
                  handleAddProduct={handleAddProduct}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
