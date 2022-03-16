import React from 'react'
import PropTypes from 'prop-types'

export const TodoListItem = ({todo, i, handleDelete, handleIsDone}) => {
  return (
    <>
        <li
          className="list-group-item todo-li"
        >
          <p className={ `text-center ${todo.done ? 'complete' : '' }`} > 
            {i + 1}. {todo.desc} 
          </p>

          <div>
            <button
              className='btn btn-danger me-2 '
              onClick={() => handleDelete(todo.id)}
            >
              Borrar
            </button>
            <button
              className='btn btn-warning'
              onClick={() => handleIsDone(todo.id) }
            >
              Done
            </button>
          </div>
        </li>
    </>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIsDone: PropTypes.func.isRequired
}