import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => setCounter( counter + 1);

    const disminuir = () => setCounter( counter - 1);
    
    const iniciar = () => setCounter (value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd}>+1</button>
            <button onClick={disminuir}>-1</button>
            <button onClick={iniciar}>Reset</button>
        </>
  )
}

CounterApp.prototype = {
    value : PropTypes.number.isRequired
}
