import React, { useState } from 'react';
import Error from './error';
import ApiError from './apiError';

import shortid from 'shortid';
import Axios from 'axios';



const Formulario = ({guardarGasto, guardarCrearGasto}) => {


    const [ nombre, guardarNombre ] = useState ('');
    const [ cantidad, guardarCantidad ] = useState (0);
    const [ error, guardarError ] = useState (false);
    const [ err, validarApi ] = useState (false);
    const payload = {
        "success": "boolean",
        "message": "success"
      }




    // Adding Payment
    const agregarGasto = e => { 
        e.preventDefault();

        // Validation
        if( cantidad < 1 || cantidad == null || cantidad === 0 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        /* API COMENTADA YA QUE NO ENCUENTRA EL PATH POR EL TIPO DE "FAKE API".
         SI SE SACA ESTE COMENTARIO LA VALIDACION POR CONSOLA Y APP FUNCIONA PERFECTAMENTE Y
         NO SE EJECUTA LA TRANSFERENCIA.
        
        Api user Validation
        if(err != null) {
        validarApi(true);
        return;
    }*/

        
        

        // Building Payment
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Sending Payment
        
        guardarGasto(gasto); 
        guardarCrearGasto(true);

        
      
// API Request and Console Validation
Axios({
    method: 'post',
    url: 'public\fakeApi.json',
    data: payload, 
    headers: {
     // 'Authorization': `bearer ${token}`,
    'Content-Type': 'application/json'
    }, 
  }).catch(handleErrors);

  function handleErrors(err){
    if(err.response){
       
        console.log("There's an issue with Response", err.response.status);
        
        
    } else if (err.response){
        
        

        console.log("There's an issue with Request");
        
    } else {
        
        

        console.log("There's an Error!", err.message)
        
    }
    
    
    
    
}
        // Reset Form
        guardarNombre('');
        guardarCantidad(0);
       // validarApi(false);
    }


    return (
        <form
            onSubmit = {agregarGasto}
        >
            <h2>Transferir</h2>

            { error ? <Error mensaje = "Todos los datos deben completarse correctamente" /> : null }

            <div className = "campo">
                <label>Address ETH</label> 
                <input
                    type = "text"
                    className = "u-full-width"
                    placeholder = "ej: 0x1ad7d512778c24..."
                    value = {nombre}
                    onChange = { e => guardarNombre(e.target.value)}
                />
            </div>
            <div className = "campo">
                <label>Monto a Transferir</label>
                <input
                    type = "number"
                    className = "u-full-width"
                    placeholder = "ej: 0.5"
                    value = {cantidad}
                    onChange = { e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <label type="readonly">Fee: 0.0025 ETH</label>
            <input 
                type = "submit"
                className = "button-primary u-full-width"
                value = "Iniciar Transferencia"
                
            />
             { err ? <ApiError mensaje = "Hubo un error en el proceso. Intentelo de vuelta." />  : null }


        </form> 
        
       
        
     );
}
 
export default Formulario;