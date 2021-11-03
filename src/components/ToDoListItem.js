import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ToDoListItem = ({id, text, done}) => {
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(text)
    const dispatch = useDispatch()
    const handleDelete =() =>{
        dispatch({type:"delete", payload: id})
    }
    const handleEdit = () => {
        setEdit(true)
    }
    const handleKeyDown = (e) => {
        const trimText= editText.trim()
        if (e.which ===13 && trimText){
            dispatch ({type: "edit", payload: id, text: editText})
            setEdit (false)
        }
    }
    const handleDone = (e) => {
        if(e.target.checked){
            dispatch ({type: "done", payload: id})
        } else {
            dispatch({type:"undone", payload: id})
        }
        console.log("done", e)
    }
   
    return (
        <div>
            {done ? 'done' : text}
            {' '}
            <span> 
                <button onClick={handleDelete}>X</button>
            </span>    
            {' '}
            {edit? <input 
            value = {editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={handleKeyDown}/>:null}
            <button onClick = {handleEdit}>edit</button>
            {' '}
            <input type="checkbox" onClick={handleDone}/>
        </div>
    )
}

export default ToDoListItem
