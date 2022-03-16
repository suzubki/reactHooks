import React from 'react'
import { Hijo } from './Hijo'

export const RenderizarHijo = React.memo(({numeros, incrementar}) => {
  return (
    <div>
        {
        numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
        ))
        }
    </div>
  )
})
