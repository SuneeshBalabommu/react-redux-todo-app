import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import {todoDelete,toggleInputForm} from "../store/features/todo/todoSlice"
import { useDispatch } from "react-redux";

const SingleTodoList = (props) => {
  const [done,setDone]= useState (false)
   const dispatch = useDispatch()
    return (
      <div className="flex justify-between bg-red-100 py-2 rounded shadow">
        <div className="px-4">
          <h1 className={done ? "font-semibold line-through" : "font-semibold"}>
            {props.name}
          </h1>
        </div>
        <div className="px-4 flex space-x-4">
          <BsCheckSquare
            className="cursor-pointer text-green-700"
            size={20}
            onClick={() => setDone(!done)}
          />
          <FaEdit
            className="cursor-pointer text-yellow-700"
            size={20}
            onClick={()=> dispatch(toggleInputForm({
              id: props.id,
              name: props.name
            }))}
          />
          <BsTrashFill
            className="cursor-pointer text-red-700"
            size={20}
            onClick={() => dispatch(todoDelete(props.id)) }
          />
        </div>
      </div>
    );
  };
  
  export default SingleTodoList;