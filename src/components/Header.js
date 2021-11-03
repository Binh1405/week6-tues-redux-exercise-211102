import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText (e.target.value)
    }

    const dispatch = useDispatch()

    const handleKeyDown=(e) => {
        // console.log("e", e)
        // console.log("e", e.which)
        const trimText = text.trim()
        if(e.which === 13 && trimText){
            dispatch({type: "addToDo", payload: trimText}) //{type: "addToDo", payload:trimText}
        }
    }

    return (
      <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
    )
}

export default Header
