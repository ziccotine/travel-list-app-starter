import React, { useState } from "react";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;