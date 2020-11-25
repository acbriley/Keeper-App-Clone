import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
  const [newNote, setNote] = useState({title: "", content:""})
  const [isExpanded, setExpanded] = useState(false);


  function handleChange(event){
    const {name, value}= event.target;
    setNote((prevValue)=>{
      return{
        ...prevValue, 
        [name] : value
      }
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    props.onAdd(newNote);
    setNote({title: "", content:""});
  }

  function handleClick(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input value={newNote.title} onChange={handleChange} name="title" placeholder="Title" />
        )}

        <textarea onClick={handleClick} value={newNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" :"1" } />
        <Zoom in={isExpanded ? true : false}> 
          <Fab onClick={handleSubmit} >
            <AddIcon /> 
          </Fab>
        </Zoom>
        
      </form>
    </div>
  )
}

export default CreateArea;