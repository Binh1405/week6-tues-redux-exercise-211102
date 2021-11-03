import {createStore} from "redux"

const initialState = {
    todos: [
        {id: 1, text: "wake up", isDeleted: false, done: false}, 
        {id: 2, text: "take a shower", isDeleted: false, done: false}
    ], 
}

//action: obj with the type {type: "im a type", }
const reducer = (state=initialState, action) => {
    // console.log("state", state)
    // console.log("action", action)
    if (action.type ==="addToDo"){
    return {
        todos: [
            ...state.todos, 
            {
                id: state.todos.length + 1, 
                text: action.payload
            },
        ],
    }
}
    if(action.type === "delete"){
        // const newArray = state.todos.filter(todo => todo.id !== action.payload)
        const newArray = state.todos.map((todo) => {
            if(todo.id === action.payload){
                todo.isDeleted = true
                return todo 
            }
            return todo
        })
        return {
        todos: newArray,
    }
}
    if(action.type === "edit"){
        // const theToDoIWantToCheck= state.todos.find((todo) => todo.id === action.payload)
        // console.log("theToDoIWantToCheck", theToDoIWantToCheck)
        // const newToDoToEdit = {...theToDoIWantToCheck, text: action.text}
        const newArray = state.todos.map((todo) => todo.id === action.payload ? {...todo, text: action.text} : todo)        
        return {
            todos: newArray,
        }
    }
    if(action.type === "done"){
        // const newArray = state.todos.filter(todo => todo.id !== action.payload)
        const newArray = state.todos.map((todo) => {
            if(todo.id === action.payload){
                todo.done = true
                return todo 
            }
            return todo
        })
        return {
        todos: newArray,
    }
}
if(action.type === "undone"){
    // const newArray = state.todos.filter(todo => todo.id !== action.payload)
    const newArray = state.todos.map((todo) => {
        if(todo.id === action.payload){
            todo.done = false
            return todo 
        }
        return todo
    })
    return {
    todos: newArray,
}
}
    return state
}
const store = createStore(reducer)
export default store