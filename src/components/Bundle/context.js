    // Context kullanirken value'ye atadigimiz degisken degerlerini global olarak her yerde kullanabilme 
    //sansina sahip oluyoruz..yani her component icin propsla ugrasmadan
import React, { useState, useContext, useEffect, useCallback } from 'react';
export const API_ENDPOINT = `http://localhost:3000/item`;


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const [query, setQuery] = useState('');
  
  const fetchItems = useCallback(
    async () => {
  setLoading(true)
      const url = `http://localhost:3000/items`
    try {
      const response = await fetch(`${url}${query}`)
      const data = await response.json();
      setItems(data);

      
      setLoading(false)
    } catch (error) {
      console.log("error")
    }
   }, [query]) 
  
  useEffect(() => {
    fetchItems(`${API_ENDPOINT}&s=${query}`);
  }, [query, fetchItems]);

  return (
    <AppContext.Provider
      value={{ loading, items, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
