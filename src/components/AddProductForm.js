import React, { useState } from "react";
import "../styles/App.css";

const AddProductForm = ({ onAddProduct, onClose }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const validateImageSize = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width === 200 && img.height === 200) {
          resolve();
        } else {
          reject(new Error("Image must be 200x200 pixels"));
        }
      };
      img.onerror = () => reject(new Error("Invalid image file"));
      img.src = URL.createObjectURL(file);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      await validateImageSize(file);
      setNewProduct((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    } catch (error) {
      alert(error.message); // Show an alert or use other ways to notify the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductWithId = {
      ...newProduct,
      id: new Date().getTime(), // Generate a unique ID based on timestamp
    };
    onAddProduct(newProductWithId); // Add product to the list
    alert("New Product has been added!!");
    onClose(); // Close the form
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit">Add Product</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
