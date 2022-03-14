import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => { 
        document.querySelector('input').focus()
     }

  return (
    <div style={{padding: "70px"}} >
        <h1> FocusScreen </h1>
        <hr />

        <input 
            ref={inputRef}
            className='form-control'
            placeholder='Su nombre'
        />
        <br />

        <button 
            className='btn btn-primary'
            onClick={handleClick}
        >
            Focus
        </button >

    </div>
  )
}
