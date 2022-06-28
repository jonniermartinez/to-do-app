import React from "react";
import './TodoItem.css'
function TodoItem(props) {
    return(
        <li className="list__item">
            <span 
            className={`item__check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            
            >✅</span>
            <p className={`item__text ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className="item__delete"
            onClick={props.onDelete}
            >❌</span>
        </li>
    );
}

export {TodoItem};
