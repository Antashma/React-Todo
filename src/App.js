import React from 'react';
//❣SG - get sample todos from todo.js
import { data } from './components/todosData';
import ToDo from './components/Todo';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: data,
      }
    }

  render() { 
    console.log('sg: app.js : this.state.todos = ', this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          {this.state.todos.map(item => 
            <ToDo key={ item.id } taskName={ item.task } />
          )}
        </div>
      </div>
    );
  }
}

export default App;
