import { useEffect, useState } from "react";
import "./App.css";
import TodoFrom from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditId, setIsEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditId) {
      const findTodo = todoList.find((t) => (t.id === isEditId));
      // console.log(findTodo);
      
      const updatedTodo = todoList.map((i) => (i.id === findTodo.id) ? (i= { ...i, todo })  : i);
      setTodoList(updatedTodo);
      localStorage.setItem('todo', JSON.stringify(updatedTodo))
      setIsEditId(null);
      setTodo('');
      return;
      
    }

    if (todo !== "") {
      const updatedTask = [{ id: uuidv4(), todo }, ...todoList];
      // console.log(updatedTask);

      const dataToLs =  JSON.stringify(updatedTask) // this convert our normal data into json format
      // console.log(dataToLs);
      localStorage.setItem('todo', dataToLs)
      setTodoList(updatedTask);
      setTodo(""); // this is going to empty our input field but for this we need to provide value to our input
    } else {
      alert("Todo must not be Empty");
    }
  };

  // Delete functionality
  const handleDelete = (id) => {
    const filterTask = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTask);
    localStorage.setItem('todo', JSON.stringify(filterTask))
    setTodo('')

    // setTodoList([...filterTask]) we can also set data like that
    // console.log(filterTask);
  };

  // edit functionality
   
  const handleEdit = (id) => {
    const editTodo = todoList.find((t) => (t.id === id));
    // console.log(editTodo);
    
    setTodo(editTodo.todo) // editTodo is an object and we have to access the value

    setIsEditId(id)
  }


  //show data from local stprage

  useEffect(() => {
    const todoListFromLs = localStorage.getItem('todo')
    const filterUserDataFromls = JSON.parse(todoListFromLs)
    setTodoList(filterUserDataFromls || []);
   },[])
   

  return (
    <div className=" flex  justify-center items-center h-[100vh]  ">
      <div className="flex  h-[80vh] border py-5 px-5 flex-col items-center ">
        <TodoFrom handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} isEdit={isEditId} />
        <TodoList todoList={todoList} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
