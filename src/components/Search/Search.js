import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
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

  );
};

export default Search;