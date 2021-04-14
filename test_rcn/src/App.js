import React, { useState, useEffect } from 'react';

import Balance from './components/balance';
import Formulario from './components/formulario';
import Listado from './components/listado';
import ControlPresupuesto from './components/controlPresupuesto';
import Gasto from './components/gasto';



function App() {

// Define State
const [ presupuesto, guardarPresupuesto ] = useState(0);
const [ restante, guardarRestante ] = useState(0);
const [ mostrarPregunta, actualizarPregunta ] = useState(true);
const [ gastos, guardarGastos ] = useState ([]);
const [ gasto, guardarGasto ] = useState ({});
const [ crearGasto, guardarCrearGasto ] = useState (false);



// useEffect For New Balance
useEffect (() =>{
  if(crearGasto) {
    guardarGastos([
      ...gastos,
        gasto
    ]);

    // Fee de Transferencia
    const presupuestoRestante =  restante - gasto.cantidad - 0.0025;
    guardarRestante(presupuestoRestante)


    //resetear a false
    guardarCrearGasto(false);
  }
},[gasto]);





  return (
    <div className = "container">
      <header>
       <h1>Transferencias</h1>

       <div className = "contenido-principal contenido">

         { mostrarPregunta ? 
         (<Balance
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
        />
         ) : (
          <div className = "row">
          <div className = "one-half column">
            <Formulario
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
            />
          </div>
          <div className = "one-half column">
            <Listado
              gastos={gastos}

            />

            <ControlPresupuesto 
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
         ) 
        }
        
        
       </div>
      </header>
    </div>
  );
}

export default App;
