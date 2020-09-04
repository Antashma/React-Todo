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
      <div className='app-container'>
        <h1>things to do...</h1>
        <ToDoForm 
          addTask={ this.addTask } 
          clearCompleted = { this.clearCompleted }/>
        <ToDoList 
          taskData = { this.state.todos } toggleComplete = { this.toggleComplete }/>
        <section className='howto-container'>
          <h2>how to use</h2>
          <p>Welcome to your Todo App!</p>
          <ul>
            <li>Type and enter new tasks with the small form at the top of this page</li>
            <li>View your new tasks underneathe</li>
            <li>Complete a task by clicking on it (or uncomplete by clicking again)</li>
            <li>Clean up your tasks by removing the ones you completed by pressing the 'Clear Completed' button.</li>
          </ul>
          <p className='fancyText'>happy tasking!</p>
        </section>
   
      </div>
    )
  }
}

export default App;
