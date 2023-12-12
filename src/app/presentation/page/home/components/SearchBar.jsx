import React from "react";
import "../HomePage.css";

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <input
    className="search-input"
    type="text"
    placeholder="Search customers..."
    value={searchTerm}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBar;
