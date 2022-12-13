import React, { useState} from 'react';
import InputFiled from './components/InputField';
import './App.css';
import { Todo } from './models';
import TodoList from './components/TodoList';
 

const App = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent<EventTarget>) => { 
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Math.random(), todo, completed: false}])
      setTodo('')
    }
    console.log(todos)
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>

      <InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd}  />
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
