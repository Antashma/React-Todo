import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log('todo.js props:', this.props)
        return <p 
            className={`task ${this.props.taskData.completed ? ' completed' : ''}`}
            onClick = {(e) => this.props.toggleComplete(this.props.taskData.id)}>
            {this.props.taskData.task}
        </p>
    };
}
export default ToDo;