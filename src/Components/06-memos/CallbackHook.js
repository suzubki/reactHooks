import React, { useCallback, useState } from 'react'
import {ShowIncrement} from './ShowIncrement'


export default function CallbackHook() {


    const [counter, setCounter] = useState(10)

    const increment =  useCallback((num) => {
        setCounter(counter => counter + num)
       },[ setCounter ])

  return (
    <div style={{padding: '70px'}} >
        <h1>CallbackHook  {counter} </h1>
        <hr />    

        <ShowIncrement increment={increment} />


    </div>

  )
}
