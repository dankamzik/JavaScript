import TodoList from './TodoList'
import TodoItems from './TodoItems'
import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"; 

var destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);