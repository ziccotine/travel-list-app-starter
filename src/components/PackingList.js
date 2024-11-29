import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleUpdateItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    }
    if (sortBy === "packed") {
      return a.packed - b.packed;
    }
    return 0;
  });

  function deleteAllItems() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      sortedItems.forEach((item) => handleDeleteItem(item.id));
    }
  }
  return (
    <div className="list">
      <div className="sort-options">
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Input Order</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
        <button onClick={deleteAllItems}>Delete All</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}