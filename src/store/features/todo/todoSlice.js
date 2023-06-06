import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { 
    todos:[],
    toggleForm:true,
    todoUpdate:{},
}

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers: {
        todoAdded: (state,action) => {
            state.todos=[...state.todos,action.payload]
        },
        todoCleared: (state) => {
            state.todos=[]
        },
        todoDelete: (state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
        },
        toggleInputForm: (state,action)=>{
            state.toggleForm = !state.toggleForm
            state.todoUpdate= {...state.todoUpdate, ... action.payload}
        },
        todoUpdated: (state,action)=>{
             const todoToUpdate= state.todos.find((todo)=> todo.id === action.payload.id)
             todoToUpdate.name = action.payload.name
             state.toggleForm=!state.toggleForm
        } 
    },
})

export const {todoAdded,todoCleared,todoDelete,toggleInputForm,todoUpdated} =  todoSlice.actions
export default todoSlice.reducer