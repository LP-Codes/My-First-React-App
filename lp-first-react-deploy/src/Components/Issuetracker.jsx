import React ,{useState} from 'react';
import "./Issuetracker.css"

const Issuetracker = () => {
  const [input, setValue] = useState("")
  const [todos, setTodos] = useState([])
// passing  entered
  const handleInput = (event) => {
    setValue(event.target.value);
  }
  
  const lp = (event) => {

    let c = [1,2,34,55]
    
    event.preventDefault();
  // if no input nothing will happen return none
    if (!input) return
    // using spread operator its used whenever we need to add array data to exiting array
    const newTodos = [...todos, input];
    
    setTodos(newTodos);
    // clearing input text
    setValue("");
  }

  return (
    <div>

<div class="input-group mb-3">
<input className="form-control border-primary font-weight-bold" style={{height:60}} placeholder="Enter Text here" type="text" value={input} onChange={handleInput} />
  <div class="input-group-append"> 
  <button  className="input-group-append font-weight-bolder "  style={{fontSize:20}} onClick={lp}> <i class="fas fa-plus-square fa-2x p-2"></i> </button>
  </div>
</div>

     
       
       
     
           
     {todos.map((x) =><ol style={{listStyle:"none"}}><li className="font-weight-bolder">{x}</li></ol> )}
    </div>
  );
}

export default Issuetracker;
