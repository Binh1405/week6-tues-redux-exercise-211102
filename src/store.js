import {createStore} from "redux"

const initialState = {
    todos: [
        {id: 1, text: "wake up", isDeleted: false}, 
        {id: 2, text: "take a shower", isDeleted: false}
    ], 
}

//action: obj with the type {type: "im a type", }
const reducer = (state=initialState, action) => {
    console.log("action", action)
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
        const newArray = state.todos.map((todo) => todo.id === action.payload? {...todo, text: action.text}: todo)        
        return {
            todos: newArray,
        }
    }
}
const store = createStore(reducer)
export default store