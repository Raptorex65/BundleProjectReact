import React, {useState} from 'react'

export default function SearchForm(props) {
  
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder="SEARCH"
            value={props.query}
            onChange={(e) => props.setQuery(e.target.value)}
          />
      </form>
    </section>
  )
}
