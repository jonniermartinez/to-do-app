import React from "react";
import { TodoContext } from "../TodoContext";
import './TocoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <p className="Title">Has completado {completedTodos} de {totalTodos} TODOs</p>
    );
}

export {TodoCounter};