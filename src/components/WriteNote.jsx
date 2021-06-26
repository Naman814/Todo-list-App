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

const handleDelete=(key)=>{
  const updatedNote=note.filter((item,idx)=>{
      return key!==idx
  })
  addNote(updatedNote);
}
    return(
    <div className="outer">
    <input type="text"  value={input} placeholder="Type here ..." onChange={(e)=>{setInput(e.target.value)}}  />
    <button onClick={handleClick}><b><FaPlus /></b></button>
    <div className="content">
     {note.map((note,idx)=>{
       return <span key={idx}> <h5>{note} </h5>  <FaTrash onClick={()=>handleDelete(idx)} /></span>
     })}
    </div>
    </div>
    );
}

export default WriteNote;