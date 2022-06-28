import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        alert(msg)
    }


    return (
        <button 
            className="button"
            onClick={() => onClickButton('Aquí debería de ir el mensaje')}
        >
            +
        </button> 
    );
}

export {CreateTodoButton};