import React from "react";

// Receives props from ShoppingList.jsx
function Filter({ search, onSearchChange, filterType, onCategoryChange }) {
  return (
    <div className="Filter">
      {/* Controlled search input */}
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Controlled category dropdown */}
      <select name="filter" value={filterType} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
        <option value="Meat">Meat</option>
      </select>
    </div>
  );
}

export default Filter;