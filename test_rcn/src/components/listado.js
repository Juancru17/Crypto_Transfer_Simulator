import React from 'react';
import Gasto from './gasto';
import Formulario from './formulario';
import Error from './error';


const Listado = ({gastos}) => (
    
    <div className = "gastos-realizados">
        
        <h2>Resumen de su transferencia</h2>
        
        {gastos.map(gasto => (
            <Gasto
                key = {gasto.id}
                gasto ={gasto}
            />
        ))}
    </div>
    
);
 
export default Listado;