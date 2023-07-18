import React from "react";
import "./Search-box.css";

const Search = ({ placeholder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Search;

// (e) => {
//   this.setState({ searchField: e.target.value });
//   }
