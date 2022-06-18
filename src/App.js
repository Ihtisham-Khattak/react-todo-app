import React, { useState } from "react";
import "./App.css";
import { GrAdd, GrClose, GrCodeSandbox } from "react-icons/gr";

function App() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  //Add intems in the list funciton.
  const add_todo_func = (e) => {
    //Prevent the default behaviour of the form.
    e.preventDefault();

    //Generate a random id for the task.
    const todo_list = {
      //use Math.random function for generating random id.
      id: Math.floor(Math.random() * 1000),
      text: input,
      flag: false,
    };

    setTask([...task, todo_list]);
    setInput("");
  };


  //Get current day, month, and year.
const date = new Date();
const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



  //Delete the task from the list function.
  const delete_todo_func = (id) => {
    let filterTask = [...task].filter((tasks) => tasks.id !== id);
    setTask(filterTask);
    console.log("delte");
  };

  //Underline completed fucntion
  const underline_todo_func = (id) => {

   
    const data =  id.flag !== false ? '' : 'COmpleted';
    console.log(data)
    setTask(
      task.map( tasks => {
        return tasks.id === id ? {...tasks, flag: !tasks.flag} : tasks;
      })
    );

  } 

  return (
    <div className="App">
      <div className="Countainer">
        <h1>
          <GrCodeSandbox /> React Todo
        </h1>

        <div className="date">
          <p>{day[date.getDay()]}</p>
          <p>{date.getDate()}</p>
          <p>{month[date.getMonth()-1]}</p>
          <p>{date.getFullYear()}</p>

        </div>

        <form onSubmit={add_todo_func}>



          <div className="from-search">

            <input type="text" placeholder="Search Task"/>

          </div>

          <div className="form-input">

          <GrAdd className="icons" />
          

          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Add Todo"
          />
          </div>
         
        </form>

        <div>
          {task.map((tasks) => {
            return (
              
              <div className='task-row' key={tasks.id}  onDoubleClick={() => underline_todo_func(tasks.id)}>
                <p>
                  {tasks.text}
                </p>
                <GrClose className="close-icons" onClick={() => {delete_todo_func(tasks.id)}}/>
              </div>
            );
          })}
        </div>

        <p> { (task<1) ? 'You have no task' : `Task: ${task.length}`}</p>
      </div>
    </div>
  );
}

export default App;
