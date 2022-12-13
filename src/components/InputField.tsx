import React, { useRef } from 'react'
import './InputField.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent<EventTarget>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    
    const inputRef=useRef<HTMLInputElement>(null)
  return (
      <div>
          <form className='input' onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
          }}>
              <input type="input" placeholder="Enter your task" className='input_box' value={todo} onChange={(e) => setTodo(e.target.value)} ref={ inputRef} />
              <button type="submit" className='submit_btn'>Go</button>
          </form>
    </div>
  )
}

export default InputField