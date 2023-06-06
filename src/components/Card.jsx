import React from 'react'
import AddToDoForm from './AddToDoForm'
import UpdateTodoForm from './UpdateToDoForm'
import SingleTodoList from './SingleTodoList'
import { useSelector } from 'react-redux'
import {useDispatch } from "react-redux";
import {todoCleared,toggleInputForm} from "../store/features/todo/todoSlice"

const Card = () => {
    const myTodos=useSelector((state)=>state.todos.todos)
    const toggleForm = useSelector((state)=>state.todos.toggleForm)
    const todoEmpty =useSelector((state)=>state.todos.todos)
    const dispatch= useDispatch()
    const handleClick = () => {
        dispatch(todoCleared())
    }

  return (
    <div className="w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2x1 rounded-1g p-2 items-center flex flex-col space-y-10 justify-between">
        <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
            <h1 className='text-3xl font-semibold underline'>My Todo List</h1>
            <div className="w-3/4">
                {toggleForm ? <AddToDoForm/> :<UpdateTodoForm/> } 
            </div>
            <div className="w-3/4">
                { todoEmpty.length < 1 ? <><div className="items-center">
                   <h1>Enter your first todo item</h1>
                </div> </>: <>
                <ul className="w-full max-h-72 overflow-y-scroll">
                    {myTodos.map((todo) => (
                         <li className="mb-3" key={todo.id}>
                            <SingleTodoList name={todo.name} id={todo.id}/>
                         </li>
                    ))}
                </ul>
                </>}
                
                
            </div>
        </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus: shadow-outline" onClick={handleClick} >
                Clear
            </button>
        
    </div>
  )
}

export default Card