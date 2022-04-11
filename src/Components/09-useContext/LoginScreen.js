import React, { useContext } from 'react'
import { UserContext } from './userContext'

export const LoginScreen = () => {

  const { setUser } = useContext( UserContext )

  const newUser = {
    id:'123',
    name: 'darwin'
  }

  return (
    <div>
        <h1>LoginScreen </h1>
        <hr/>

        <button
          className='btn btn-primary'
          onClick={ () => setUser({...newUser})}
        >
          Establecer nuevo valor
        </button>

    </div>
  )
}
