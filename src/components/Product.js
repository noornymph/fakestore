import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Product = () => {
  const [loading, setLoading] = useState(false); // Indicates loading state
  const [data, setData] = useState([]); // Stores fetched data

  useEffect(() => {
    setLoading(true); // Start loading before making the request
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data); // Store fetched data in the state
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false)); // Stop loading after the request completes
  }, []);

  return (
    <div className="product-container">
      {loading ? (
        <p>Loading...</p> // Show loading state while fetching data
      ) : (
        data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Category : ${product.category}`}</h6>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;
