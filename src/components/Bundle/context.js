import React, { useState, useContext } from 'react'
import useFetch from './useFetch'
export const API_ENDPOINT = `http://localhost:3000/bundle`
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('hat')
  const { isLoading, error, data: items } = useFetch(`&s=${query}`)

  return (
    // Context kullanirken value'ye atadigimiz degisken degerlerini global olarak her yerde kullanabilme 
    //sansina sahip oluyoruz..yani her component icin propsla ugrasmadan
    <AppContext.Provider value={{ isLoading, error, items, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
