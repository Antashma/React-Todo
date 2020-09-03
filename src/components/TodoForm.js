import React from 'react';
import ToDo from './Todo';

class ToDoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input type='text' name='task'/>
                <button type='submit'>Add Task</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm;