import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100)



  return (
    <>
        <h1>CounterWithHook: {state} </h1>
        <hr />

        <button onClick={() => increment(2)}  className='btn btn-primary'>+1</button>
        <button onClick={() => decrement(2)} className='btn btn-primary'>-1</button>
        <button onClick={reset} className='btn btn-primary'>Reset</button>

    </>
  )
}

