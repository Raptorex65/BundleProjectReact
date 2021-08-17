import React from 'react'
import { useGlobalContext } from './context'

export default function SearchForm() {
  const { query, setQuery } = useGlobalContext()

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder="SEARCH"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
      </form>
    </section>
  )
}
