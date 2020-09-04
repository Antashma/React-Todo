import React from 'react';
import ToDo from './Todo'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className='todo-list-container'>
                {this.props.taskData.map(item => 
                <ToDo 
                    key={ item.id }
                    toggleComplete={ this.props.toggleComplete } taskData={ item } />
                )}
            </div>
        );
    };
};

export default ToDoList;