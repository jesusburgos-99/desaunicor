function Resultados(props) {
    let clase = 'error';
    if (props.sol === '1') {
        if (props.solu[0] === props.res[0]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 1. Libra esterlina
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '2') {
        if (props.solu[1] === props.res[1]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 2.  Rublo ruso
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '3') {
        if (props.solu[2] === props.res[2]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 3. Renminbi
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '4') {
        if (props.solu[3] === props.res[3]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 4. Peso
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '5') {
        if (props.solu[4] === props.res[4]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 5. Real brasileño
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '6') {
        if (props.solu[5] === props.res[5]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 6. Franco suizo
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '7') {
        if (props.solu[6] === props.res[6]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 7. Corona checoslovaca
            </div>
        );
    }
    clase = 'error';
    if (props.sol === '8') {
        if (props.solu[7] === props.res[7]) {
            clase = 'bien'
        }
        return (
            <div className={clase}>
                Respuesta correcta: 8. Euro
            </div>
        );
    }
  
}
 
export default Resultados;