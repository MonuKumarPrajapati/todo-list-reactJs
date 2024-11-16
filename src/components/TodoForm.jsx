import React from "react";

const TodoForm = ({ handleSubmit, setTodo, todo, isEdit }) => {
  return (
    <>
      <h1 className="font-extrabold text-xl">Todo list app</h1>
      <form
        className="flex w-[512px] justify-between  text-black"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-between items-center ">
        <input
          className="  py-1 px-2 my-2 w-[80%] rounded-[14px] font-semibold "
          type="text"
          maxLength={50}
          value={todo}
          onChange={(e) =>
            setTodo(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          placeholder="Write Your Todo"
        />
        <button
          type="submit"
          className={
            isEdit
              ? todo.length > 1
                ? " rounded py-1 px-3 bg-green-500 text-white" // Save button styling
                : " rounded py-1 px-3 bg-blue-500 text-white" // Edit button styling
              : "  rounded py-1 px-3 bg-gray-500 text-white" // Add button styling
          }
        >
          {isEdit ? (todo.length > 1 ? "Save" : "Edit") : "Add"}
          </button>
          </div>
      </form>
    </>
  );
};

export default TodoForm;
