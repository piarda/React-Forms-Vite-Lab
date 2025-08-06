import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// Receives props from App.jsx
function ShoppingList({ items, searchTerm, onSearchChange, filterType, onFilterChange, onItemFormSubmit }) {
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />

      {/* Filter dropdown (controlled component) */}
      <Filter
        search={searchTerm}
        onSearchChange={onSearchChange}
        filterType={filterType}
        onCategoryChange={(e) => onFilterChange(e.target.value)}
      />

      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;