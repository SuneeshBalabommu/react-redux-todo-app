import { useState } from "react";
import {useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todoAdded } from "../store/features/todo/todoSlice";
const AddTodoForm = () => {
  const [input,setInput]=useState("")
  const dispatch= useDispatch()
  const handleSubmit = (e) => {
       e.preventDefault()
       if(/^\s*$/.test(input)){
        alert("Enter a Todo")
        setInput (" ")
       } else{
          dispatch(todoAdded({id: nanoid(),name: input,}))
          setInput (" ")
       }
  }
  
  return (
    <>
      <form  className="flex space-x-3" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Add todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;