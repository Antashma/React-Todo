import React from 'react';

const ToDo = props => {
    return (
    <p 
        className={`task ${props.taskData.completed ? ' completed' : ''}`}
        onClick = {(e) => props.toggleComplete(props.taskData.id)}>      
       <span>{props.taskData.task}</span>
    </p>
    )
}

export default ToDo;