/* eslint-disable no-use-before-define */
import React from "react";
import styled from 'styled-components'

export default function SideBar({query, setQuery, categories, filterItems}) {

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
              placeholder="search"
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => filterItems(category)}
                    type="button"
                    name="category"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
`
