import React from "react";
import "./ToDoList.css";

const ToDoList = ({ todos }) => (
    <ul>
    {todos.map(({id, text}) => (
        <li key={id}>
            <p>{text}</p>
            <button>Delete</button>
        </li>))}
</ul>);

export default ToDoList;