import React, { useState, useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter'
import './layout.css'

// Se ejecuta después del renderizado total, se utiliza para sacar mediciones de lo divs
// o para ejecutar código extra como funcionalidades ~~

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { quote } = !!data && data[0]

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
         
    }, [quote])


    return (
        <div style={{ padding: "70px" }} >
            <h1>LayoutEffect</h1>
            <hr />

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p ref={ pTag } > {quote} </p>
                </blockquote>    
            </figure>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button
                onClick={increment}
                className="btn btn-primary"
            >
                Siguiente quote
            </button>


        </div>
    )
}
