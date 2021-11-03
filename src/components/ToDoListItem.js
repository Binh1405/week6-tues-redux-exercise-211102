import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ToDoListItem = ({id, text}) => {
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(false)
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
    return (
        <div>
            <span> {text} </span>
            <span> 
                <button onClick={handleDelete}>X</button>
            </span>    
            {edit? <input 
            value = {editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={handleKeyDown}/>:null}
            <button onClick = {handleEdit}>edit</button>
        </div>
    )
}

export default ToDoListItem
