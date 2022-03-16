import { useState } from 'react'

// Recibe un objeto y retorna un nuevo objeto 'Values' que se genera al hacer un onChange
// a un input cualquiera. El reset() nos permite limpiar el campo

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => { 
        setValues(initialState)
     }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })
     }

  return [ values, handleInputChange, reset]
}
