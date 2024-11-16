import { useEffect, useState } from "react";
import "./App.css";
import TodoFrom from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Modal from "./components/Modal";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);// handle the main state
  const [filterData, setFilterData] = useState([]);// handle the search state
  const [isEditId, setIsEditId] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");
  // const [showModal, setShowModal] = useState(false)

  // const notify = () => toast("Wow so easy!");

  // search logic
  const handleSearch = (text) => {
    let filterData = todoList.filter((todo) =>
      todo.todo.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(filterData);
    // setFilterData('')
    // console.log(filterData);
    setSearchTxt('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditId) {
      const findTodo = todoList.find((t) => t.id === isEditId);
      // console.log(findTodo);

      const updatedTodo = todoList.map((i) => {
        return i.id === findTodo.id ? (i = { ...i, todo }) : i
      });
      setTodoList(updatedTodo);
      localStorage.setItem("todo", JSON.stringify(updatedTodo));
      toast.success('Todo Edited')

      setIsEditId(null);
      setTodo("");
      
      return;
    }

    if (todo !== "") {
      const updatedTask = [{ id: uuidv4(), todo }, ...todoList];
      // console.log(updatedTask);

      const dataToLs = JSON.stringify(updatedTask); // this convert our normal data into json format
      // console.log(dataToLs);
      localStorage.setItem("todo", dataToLs);
      setTodoList(updatedTask);
      toast.success('Your Todo Added')
      setTodo(""); // this is going to empty our input field but for this we need to provide value to our input
    } else {
      // alert("Todo must not be Empty");
      toast.warn("Todo must not be Empty")
    }
  };

  // Delete functionality
  const handleDelete = (id) => {
    const filterTask = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTask);
    localStorage.setItem("todo", JSON.stringify(filterTask));
    setTodo("");
    setIsEditId(null);
    // setTodoList([...filterTask]) we can also set data like that
    // console.log(filterTask);
  };

  // edit functionality

  const handleEdit = (id) => {
    const editTodo = todoList.find((t) => t.id === id);
    // console.log(editTodo);
    setTodo(editTodo.todo); // editTodo is an object and we have to access the value
    setIsEditId(id);
    // setShowModal(true)
  };

  //show data from local stprage

  useEffect(() => {
    const todoListFromLs = localStorage.getItem("todo");
    const filterUserDataFromls = JSON.parse(todoListFromLs);
    setTodoList(filterUserDataFromls || []);
  }, []);

  return (
    <>
      
      {/* <button onClick={notify}>Notufy</button> */}
      <div className=" flex  justify-center items-center h-[100vh]  ">
        <div className="flex  h-[80vh] border py-5 px-5 flex-col items-center ">
          <Search
            setSearchTxt={setSearchTxt}
            searchTxt={searchTxt}
            handleSearch={handleSearch}
          />
          <TodoFrom
            handleSubmit={handleSubmit}
            setTodo={setTodo}
            todo={todo}
            isEdit={isEditId}
          />
          <TodoList
            searchTxt={searchTxt} 
            todoList={filterData.length > 0 ? filterData : todoList} // this conditional rendring
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            // filterData={filterData}

          />
            <ToastContainer />
        </div>
        {/*<button className=" py-2 px-3 bg-slate-300 text-black" onClick={()=>setShowModal(true)}> show model
      </button>*/}
        {/* { showModal && <Modal setShowModal={setShowModal} />} */}
      </div>
    </>
  );
}

export default App;
