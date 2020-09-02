import React from 'react';
//❣SG - get sample todos from todo.js
import { data } from './components/Todo'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>{data.map(item => <p>{item.task}</p>)}</div>
      </div>
    );
  }
}

export default App;
