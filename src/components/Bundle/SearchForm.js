import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search items</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <div className='error'>Item not found !</div>}
    </form>
  )
}

export default SearchForm
