import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter'

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote } = !!data && data[0]

  return (
    <div style={{ padding: "70px" }} >
      <h1>Breaking bad quotes</h1>
      <hr />


      { 
        loading ? 
          <div className='alert alert-info text-center' >
            Loading...
          </div>
        : 
          <figure className="text-end">
            <blockquote className="blockquote">
              <p> {quote} </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {author}
            </figcaption>
          </figure>
      }

        <button
          onClick={increment}
          className="btn btn-primary"
        >
          +1
        </button>


    </div>
  )
}
