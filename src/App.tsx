import React, { useState } from 'react'
import InputBox from './component/InputBox'
import { Todo } from './Model';
import TodoList from './component/TodoList';




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([])

  const handleClick = () => {
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <div className=' bg-neutral-950 h-screen flex flex-col items-center'>
      <h1 className=' text-white text-3xl font-semibold p-4'>Task-App</h1>
      <InputBox todo={todo} setTodo={setTodo} handleClick= {handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
