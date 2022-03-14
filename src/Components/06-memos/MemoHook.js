import React, { useMemo, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(100)

    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) => { 
        for (let index = 0; index < iteraciones; index++) {
            console.log('Ahí vamos...')
        }

        return `${iteraciones} iteraciones realizadas...`
     }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div style={{padding: '70px'}} >
        <h1> MemoHook </h1>
        <h3> Counter <small > {counter} </small> </h3>
        <hr />

        <p> {memoProcesoPesado} </p>


        <button
            className='btn btn-primary'
            onClick={increment}
        >  +1 
        </button>

        <button
            className='btn btn-primary ms-4'
            onClick={()=> {
                setShow(!show)
            }}
        >  Show/Hide { JSON.stringify(show) } 
        </button>
    </div>
  )
}
