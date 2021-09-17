// Context kullanirken value'ye atadigimiz degisken degerlerini global olarak her yerde kullanabilme 
//sansina sahip oluyoruz..yani her component icin propsla ugrasmadan
import React, { useState, useContext, useEffect } from 'react';
//import axios from 'axios';
const url = `http://localhost:3000/items`
const ItemsContext = React.createContext();

  const ItemsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  //const [isError, setIsError] = useState(false);
const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setItems(data);

    setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchItems(`${url}&s=${query}`);
  }, [query]);

  return (
    <ItemsContext.Provider value={{ loading, items, setItems, query, setQuery }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => {
  return useContext(ItemsContext);
};

export { ItemsContext, ItemsProvider };
