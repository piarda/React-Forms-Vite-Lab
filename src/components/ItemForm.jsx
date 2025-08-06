import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState(""); // Controlled input for item name
  const [category, setCategory] = useState("Produce"); // Controlled input for category with "Produce" as default

  // Handles for submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents page from reloading

    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };

    // Passes new item to App.jsx
    onItemFormSubmit(newItem);
    setName(""); // Clears form inputs after submitting
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Meat">Meat</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;