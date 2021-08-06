import React from 'react';
import Numero from './Numero';

function Preguntas(props) {

   let solucion = React.createRef()

   function guardar() {
       props.sig()
       props.guar(solucion.current.value)
       solucion.current.value=""
   }

    let boton = "Sig"
    let cont = props.cont
    if (props.cont === 8) {
        boton = "Fin"
    }

    return (
        <div className="Preguntas">
            <div>
                <Numero cont={cont} />
                <input type="text" placeholder="Solución" ref={solucion} />
            </div>
            <span className="botones">
                <button onClick={props.ant}>Ant</button>
                <span className="contador">{cont}/8</span>
                <button onClick={guardar}>{boton}</button>
            </span>
        </div>
    );
}

export default Preguntas