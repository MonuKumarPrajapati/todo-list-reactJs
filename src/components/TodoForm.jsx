import React from "react";

const TodoForm = ({ handleSubmit, setTodo, todo, isEdit }) => {
  return (
    <>
     <div className="">
  <h1 className="font-extrabold text-xl text-center sm:text-2xl md:text-3xl">Todo List App</h1>
  <form
    className="flex flex-col sm:flex-row sm:w-full md:w-[512px] justify-between items-center text-black mx-auto mt-4"
    onSubmit={handleSubmit}
  >
    <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-2">
      <input
        className="py-2 px-3 w-full sm:w-[70%] rounded-[14px] font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className={`rounded py-2 px-4 font-semibold text-white ${
          isEdit
            ? (todo.length > 1
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600")
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        {isEdit ? (todo.length > 1 ? "Save" : "Edit") : "Add"}
      </button>
    </div>
  </form>
</div>

    </>
  );
};

export default TodoForm;
