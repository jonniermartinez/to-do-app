import React from "react";
import './TocoCounter.css'

function TodoCounter( {total, completed}) {

    return (
        <p className="Title">Has completado {completed} de {total} TODOs</p>
    );
}

export {TodoCounter};