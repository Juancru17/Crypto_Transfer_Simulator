import React, { Fragment, useState } from 'react';

import Error from './error';


const Balance = ( { guardarPresupuesto, guardarRestante, actualizarPregunta } ) => {

    // Define state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Reading user balance
    const definirBalance = e => {
        guardarCantidad( parseInt(e.target.value,10) )
    }

    // Adds balance to app (pseudo Log in)
    const agregarBalance = e => {
        e.preventDefault();

        // Validation
        if( cantidad < 0 || cantidad == null || cantidad === 0 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        // Passing Validation
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }
    
    return ( 
        <Fragment>
            <h2>Digite su balance actual</h2>

            { error ? <Error mensaje="Valor incorrecto"/> : null }

            <form
                onSubmit = { agregarBalance }
            >
                <input 
                    type = "number"
                    className = "u-full-width"
                    placeholder = "Balance Actual en ETH: "
                    onChange = { definirBalance }
                />

                <input 
                    type = "submit"
                    className = "button-primary u-full-width"
                    value = "Definir Balance"
                />
            </form>
        </Fragment>
     );
}
 
export default Balance;