import React from 'react';
import ToDo from './Todo';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: '',
        };
    };

    handleChanges = (event) => {
        console.log('sg: todoform.js: this.state.newTask =', this.state.newTask);
        this.setState({newTask : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <form>
                <input type='text' name='task' value={this.state.newTask} onChange={this.handleChanges} />
                <button type='submit'>Add Task</button>
                <button type='button'>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm;