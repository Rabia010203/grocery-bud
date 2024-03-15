import { useState } from "react"
import { toast } from "react-toastify";

const Form = ({addItem}) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
       if(!text){
        toast.error("please provide value");
        return;
       }
        addItem(text); 
        setText("");
          
    }
  return (
    <form  onSubmit={handleSubmit}>
    <h4>grocery bud</h4>
    <div  className="form-control">
       
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-input"/>
      <button className="btn" type="submit">Add item</button>
    </div>
    </form>
  )
}

export default Form
