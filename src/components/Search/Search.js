import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <div className='search-container'>
      <form className="form">
          <input
            type="text"
            name="search"
            className="search-inp"
            placeholder="Search"
            onChange={(event) => {
              props.filterArticles(event.target.value);
            }}
          />
      </form>
    </div>
  );
};

export default Search;