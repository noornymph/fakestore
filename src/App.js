import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { DataProvider } from "./hooks/DataContext";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Product searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;
