import React from 'react'
import { useSelector } from 'react-redux'
import ToDoListItem from './ToDoListItem'

const ToDoList = () => {
    const todos = useSelector((state) => state.todos)
    console.log("todos", todos)
    return (
        <div>
            {
            todos.map((todo) => todo.isDeleted?null:(
            <ToDoListItem key={todo.id} id={todo.id} text={todo.text} />
            )
            )}
        </div>
    )
}

export default ToDoList
