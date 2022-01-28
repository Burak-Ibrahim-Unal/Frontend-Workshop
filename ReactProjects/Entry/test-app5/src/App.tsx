import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';


const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className='header'> Tasks List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* <TodoList /> */}
      {todos.map(t=> (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
