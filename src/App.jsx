import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);
  
  let saveTodoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;
    if (!todolist.some(todo => todo.name === toname)) {
      let finalTodoList = [...todolist, { name: toname, completed: false }];
      setTodolist(finalTodoList);
    } else {
      alert("Already Exist");
    }
    event.target.toname.value = ''; // Clear the input field
  };

  let deleteRow = (index) => {
    let finalList = todolist.filter((_, i) => i !== index);
    setTodolist(finalList);
  };

  let toggleStatus = (index) => {
    let updatedList = todolist.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodolist(updatedList);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" required />
        <button type="submit">Save</button>
      </form>
      <ul className="showTodoList">
        {todolist.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? "completedTodo" : "incompletedStatus"}
            onClick={() => toggleStatus(index)}
          >
            {index + 1}. {todo.name} 
            <button onClick={(e) => {e.stopPropagation(); deleteRow(index);}}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
