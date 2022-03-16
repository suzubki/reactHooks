import React from 'react'
import PropTypes from 'prop-types'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleIsDone }) => {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {
          todos.map((todo, i) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              i={i}
              handleDelete={handleDelete}
              handleIsDone={handleIsDone}
            />
          ))
        }
      </ul></>
  )
}


TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIsDone: PropTypes.func.isRequired
}

export default TodoList