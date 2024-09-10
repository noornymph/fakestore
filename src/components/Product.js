import React, { useContext } from "react";
import "../styles/App.css";
import { DataContext } from "../hooks/DataContext";

const Product = ({ searchQuery, products }) => {
  const { data, loading, error } = useContext(DataContext);
  const combinedData = [...data, ...products];
  console.log(combinedData);

  // Filter products based on search query
  const filteredProducts = combinedData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
