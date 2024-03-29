import React from 'react'
import { Todo } from '../Model'
import SingleTodo from './SingleTodo';

type Props ={
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos, setTodos}:Props) => {
  return (
    <div className='w-1/2'>
      {todos.map(todo => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList
