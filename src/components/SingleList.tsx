import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import './InputField.css'


type Props ={ 
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleList = ({todo, todos, setTodos}:Props) => {
  return (
      <form className='todos_single'>
          <span className='todos_single_text'>{todo.todo}</span>
          <div>
              <span className='icon'><AiFillEdit/></span>
              <span className='icon'><AiFillDelete/></span>
              <span className='icon'><MdOutlineDownloadDone/></span>
           
              
          </div>
     </form>
  )
}

export default SingleList