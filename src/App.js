import React from 'react';
//❣SG - get sample todos from todo.js
import { data } from './components/todosData';
import ToDo from './components/Todo';
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
        <div>
          {this.state.todos.map(item => {
            return console.log('sg: app.js: map item value',item),
            <ToDo 
              key={ item.id }
              toggleComplete={ this.toggleComplete } taskData={ item } />
            })}
          <ToDoForm 
            addTask={ this.addTask } 
            clearCompleted = { this.clearCompleted }/>
        </div>
      </div>
    )
  }
}

export default App;
