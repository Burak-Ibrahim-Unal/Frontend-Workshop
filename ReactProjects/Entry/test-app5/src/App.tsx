import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';


const App = () => {

  const [todo, setTodo] = useState<string>("");
  console.log(todo);

  return (
    <div className="App">
      <span className='header'> Tasks List</span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
