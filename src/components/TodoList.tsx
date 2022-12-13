import React, {   } from 'react'
import { Todo } from '../models';
import './InputField.css'
import SingleList from './SingleList';


interface Props { 
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos}:Props) => {
  return (
      <div className='todos'>
          {todos.map((todo) => (
             
                  <SingleList todo={ todo} key={todo.id} todos={todos}  setTodos={setTodos} />
            
        ))}
          
     </div>
  )
}

export default TodoList