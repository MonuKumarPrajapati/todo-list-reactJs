import React from "react";

const TodoForm = ({ handleSubmit, setTodo, todo, isEdit }) => {
  return (
    <>
      <h1 className="font-extrabold text-xl">Todo list app</h1>
      <form
        className="flex w-[512px] justify-between  text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="  py-1 px-2 my-2 w-[80%] rounded-[14px] font-semibold "
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Your Todo"
        />
        <button
          type="submit"
          className="  py-1 px-2 my-2 rounded-[6px] bg-slate-200  "
        >
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
