export default function Stats({ items }) {
    const noOfItems = items.length;
    const itemsPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((itemsPacked / noOfItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything!"
            : `You have ${noOfItems} items in the list. You already packed ${itemsPacked} (${percentage}%).`}
        </em>
      </footer>
    );
  }