import React from 'react';

function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#c5e2d2",
        textDecoration: "line-through",
        };

    //we gaan de todo destructen, zodanig dat je code kleiner is
    const {completed, id, title} = props.todo;

    return(
            <li className="todo-item">
                
                <input
                    type="checkbox" 
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button className="btn-style" onClick={() => props.deleteTodoProps(id)}>X
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </li>
            )
}

export default TodoItem;