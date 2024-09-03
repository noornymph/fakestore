import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import AddProductForm from "./components/AddProductForm";
import { DataProvider } from "./hooks/DataContext";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [products, setProducts] = useState([]); // State to manage products

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddProductClick = () => {
    setShowAddProductForm(true);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleCloseForm = () => {
    setShowAddProductForm(false);
  };

  return (
    <div className="App">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onAddProductClick={handleAddProductClick}
      />
      {showAddProductForm && (
        <AddProductForm
          onAddProduct={handleAddProduct}
          onClose={handleCloseForm}
        />
      )}
      <Product searchQuery={searchQuery} products={products} />
      <Footer />
    </div>
  );
};

export default App;
