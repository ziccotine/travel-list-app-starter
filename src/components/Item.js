export default function Item({ item, handleDeleteItem, handleUpdateItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item.id)}
        />
        <p
          style={{
            textDecoration: item.packed ? "line-through" : "none",
          }}
        >
          {item.description} ({item.quantity})
        </p>
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </li>
    );
  }