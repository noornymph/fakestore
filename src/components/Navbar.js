import React from "react";
import "../App.css";

const Navbar = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="navbar">
      <h1>Shopping App</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default Navbar;
