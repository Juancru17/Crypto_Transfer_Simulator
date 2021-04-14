import React, {Fragment} from 'react';

const ControlPresupuesto = ({ restante, presupuesto }) => {
    return ( 
        <Fragment>
            <div className = "alert ">
                Balance Inicial: $ {presupuesto}
            </div>
            <div className = "alert alert-primary ">
            Nuevo Balance: $ {restante}
            </div>
        </Fragment>

     );
}
 
export default ControlPresupuesto;