import React, { createContext } from "react";
import useFetchData from "./useFetchData";

// Create a context
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
