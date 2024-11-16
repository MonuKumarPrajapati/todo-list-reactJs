import React from 'react'
// import Modal from './Modal'

const TodoList = ({ todoList, handleDelete, handleEdit, showModal}) => {
    // console.log(todoList);
    
  return (
      <>
          <ul className=" list-none w-full ">
              {
                  todoList && todoList.map((item) => (
                    <li key={item.id} className="  flex justify-between items-center gap-6 border-b py-2">
                          <span className=" font-semibold text-xl">{item.todo }</span>
                    <div className=" flex gap-3">
                      <button className=" py-1 px-2 bg-orange-500 rounded  "  onClick={()=>handleEdit(item.id)}>Edit</button>
                      <button className="py-1 px-2 bg-red-500 rounded " onClick={()=>handleDelete(item.id)}>Delete</button>
                      </div>
                    </li>
                  ))
              }
      </ul>
      {/* <Modal/> */}
    </>
  )
}

export default TodoList