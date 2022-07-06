import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from '../TodoContext';
/*const defaultTodos = [
  { text: 'llorar con la llorona', completed: false},
  { text: 'Cortar Cebolla', completed: false},
  { text: 'bailar tango', completed: false}
]*/

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
