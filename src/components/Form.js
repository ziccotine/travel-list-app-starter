import React, { useState } from "react";

export default function Form({ handleAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      description: descriptionInput,
      quantity: quantityInput,
      packed: false,
    };

    handleAddItem(item);

    setDescription("");
    setQuantity("1");
  }

  const [quantityInput, setQuantity] = useState(1);
  const [descriptionInput, setDescription] = useState();

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        id="quantity"
        value={quantityInput}
        onChange={handleQuantity}
        required
      >
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
      </select>
      <input
        id="description"
        type="text"
        placeholder="Item..."
        onChange={handleDescription}
        value={descriptionInput}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}