import React from "react";
import "../styles/App.css";

const Navbar = ({ searchQuery, onSearchChange, onAddProductClick }) => {
  return (
    <div className="navbar">
      <h1>Shopping App</h1>
      <div className="side-elements">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={onSearchChange}
          className="search-input"
        />
        <button className="add-product-button" onClick={onAddProductClick}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Navbar;
