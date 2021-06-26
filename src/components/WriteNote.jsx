import { useState } from "react";
import { FaPlus , FaTrash } from 'react-icons/fa';

const WriteNote=()=>{
const [input,setInput]=useState('')
const [note,addNote]=useState([])

function handleClick(){
  if(input!==""){
    addNote( [...note , input])
    setInput('');
  } 
}

const handleDelete=(e)=>{
  console.log(e)
}
    return(
    <div className="outer">
    <input type="text"  value={input} placeholder="Type here ..." onChange={(e)=>{setInput(e.target.value)}}  />
    <button onClick={handleClick}><b><FaPlus /></b></button>
    <div className="content">
     {note.map((note,idx)=>{
       return <span key={idx}> <h5>{note} </h5>  <FaTrash onClick={handleDelete} /></span>
     })}
    </div>
    </div>
    );
}

export default WriteNote;