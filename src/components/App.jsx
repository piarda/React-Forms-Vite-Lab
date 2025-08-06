import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // States for search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Callback function to add new items
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Filters items based on search and category selection
  const filteredItems = items.filter(item => {
    const search = searchTerm.trim().toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesType = filterType === 'All' || item.category === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />

      {/* Passes down searchTerm, setSearchTerm, filterType, setFilterType to ShoppingList */}
      <ShoppingList items={filteredItems}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterType={filterType}
        onFilterChange={setFilterType}
        onItemFormSubmit={handleAddItem} />
    </div>
  );
}

export default App;