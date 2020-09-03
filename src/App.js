import React from 'react';
//❣SG - get sample todos from todo.js
import { data } from './components/todosData';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

import './components/Todo.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data,
    }
  }

  addTask = (newTask) => {
    this.setState({todos: [...this.state.todos, newTask]});
  }

  toggleComplete = (taskID) => {
    this.setState({todos: this.state.todos.map(
      item => {
        if (taskID === item.id) {
          return {
            ...item,
            completed: !item.completed,
          }//if return block
        } //if block
        return item;
      }//map block  
    )})//map parens, setState object new object start, setState parens
  };//toggleComplete block

  clearCompleted = () => {
    /* return only uncompleted tasks */
    const uncompleteTasks = this.state.todos.filter(item => !item.completed);
    this.setState({todos: uncompleteTasks});
  }

  render() { 
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <ToDoList 
            taskData = { this.state.todos } toggleComplete = { this.toggleComplete }/>
          <ToDoForm 
            addTask={ this.addTask } 
            clearCompleted = { this.clearCompleted }/>
      </div>
    )
  }
}

export default App;
