import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            style={{marginLeft: '20px'}}
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
)