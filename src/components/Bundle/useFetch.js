import { useState, useEffect } from 'react';

const API_ENDPOINT = `http://localhost:3000/bundle`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
 // const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState()
  
  const fetchItems = async () => {
    let url = `http://localhost:3000/items`
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setData(data)
     
    } catch (error) {

      console.log(error)

    }      
    setIsLoading(false)

  }

  useEffect(() => {
    fetchItems(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])
  return { isLoading, data }
}

export default useFetch
