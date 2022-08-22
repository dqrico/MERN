import React, { useState } from "react";

const Form = (props) => {
  //state for todoText
  const [todoText, setTodoText] = useState("");


  const { todoList, setTodoList } = props;

  // handler to be called when form is submitted.
  const submitHandler = (e) => {
    e.preventDefault();
    // Calls the setter function. Inside, set new todoList Array state variables:
    //    1. make a copy of all the CURRENT elements in todoList
    //    2. the todo item that the user wants to add to the todo list when submit button is clicked
    setTodoList([
      // shallow copy of todoList --> this will simply copy all values inside todoList into this array being set
      ...todoList,
      // build new todo object and add to end of array to be set
      {
        content: todoText,
        markedDelete: false, // markedDelete will be initialized in every todo as false
        //We need a unique id for each to item. This is a common javascript way to generate a random, unique number.
        id: Math.floor(Math.random() * 100000000).toString(),
      },
    ]);
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* This will be the input where todoText is added.  */}
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;