import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      {/* pass props */}
      <Form todoList={todoList} setTodoList={setTodoList} />
      {/* pass props */}
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;