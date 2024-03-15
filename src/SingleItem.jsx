
export function SingleItem({
  
  editItem,
  item,
  removeItem
}) {
  return <div className='single-item'>
        
        <input type="checkbox" checked={item.completed} onChange={() => editItem(item.id)}/>
        <p style={{
      textTransform: "capitalize",
      textDecoration: item.completed && "line-through"
    }}>{item.name}</p>
        <button className="btn remove-btn" style={{
      color: "white",
      textTransform: "capitalize"
    }} onClick={() => removeItem(item.id)}>delete</button>
        </div>;
}
  