import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import './todoApp.css'


const init = () => {
  // Si no existen ToDos guardados se crea un array vacio ^^
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])


  const handleAdd = ( newTodo ) => { 
    const action = {
      type: 'add',
      payload: newTodo
    }
    
    dispatch(action)
  }

  const handleDelete = ( todoId ) => { 
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action)
   }

  const handleIsDone = ( todoId ) => { 
    const action = {
      type: 'isDone',
      payload: todoId
    }
  
    dispatch(action)
  }

  return (
    <div style={{ padding: '70px' }} >
      <h1>TodoApp {todos.length} </h1>
      <hr />

      <div className='row'>
        <div className='col-7' >
          <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleIsDone={handleIsDone} 
          />
        </div>

        <div className='col-5' >
          <TodoForm 
            handleAdd={handleAdd}
          />
        </div>

      </div>
    </div>
  )
}
