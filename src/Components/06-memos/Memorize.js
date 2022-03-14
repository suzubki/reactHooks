import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter(10)

    const [show, setShow] = useState(true)


  return (
    <div style={{padding: '70px'}} >
        <h1> Counter <Small value={counter} > </Small> </h1>
        <hr />

        <button
            className='btn btn-primary'
            onClick={increment}
        >  +1 
        </button>

        <button
            className='btn btn-primary ms-4'
            onClick={()=> {
                increment()
                setShow(!show)
            }}
        >  Show/Hide { JSON.stringify(show) } 
        </button>
    </div>
  )
}
