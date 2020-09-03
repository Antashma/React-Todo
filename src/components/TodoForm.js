import React from 'react';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.addTask({
            task: this.state.newTask,
            id: Date.now(),
            completed:false,
        });
        this.setState({newTask: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='task'
                    value={this.state.newTask}
                    onChange={this.handleChanges} 
                 />
                <button 
                    disabled={this.state.newTask === '' ? true : false} 
                    type='submit'>
                        Add Task
                </button>
                <button type='button'>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm;