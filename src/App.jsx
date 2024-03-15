import { useState } from "react";
import Form from "./Form";
import { nanoid } from 'nanoid';
import Items from "./Items";
import {ToastContainer , toast} from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
}
const defaultItem = JSON.parse(localStorage.getItem("items") || "[]");
const App = () => {
  
  const [items, setItems] = useState(defaultItem);
  const addItem = (text) => {
    
      const newItem = {
        name:text,
        completed: false,
        id: nanoid(),
     };
     const newItems = [...items, newItem]
     setItems(newItems);
    //  localStorage.setItem("items", `${JSON.stringify(newItems)}`)
     setLocalStorage(newItems)
     toast.success("new item added");                                        
   };
   const removeItem = (id) => {
    const upDatedItems = items.filter((item) => item.id !== id)
      setItems(upDatedItems);
      setLocalStorage(upDatedItems);
      toast.success("item deleted"); 
    }
   const editItem = (itemId)  => {
      const newItems = items.map((item) => {
      if(item.id === itemId){
       const newItem = {...item, completed: !item.completed};
       return newItem;
       
      }
      return item;
    });
      setItems(newItems);
      setLocalStorage(newItems);
   }
  return (
    <section className="section-center">
     <ToastContainer position='top-center'/>
     <Form  addItem={addItem}/>
     <Items items={items} removeItem={removeItem} editItem={editItem}/>
     
    </section>
  )
};

export default App;
