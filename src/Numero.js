function Numero(props) {
    if (props.cont === 1) {
        return (
            <p>1. Moneda usada en Gran Bretaña<br /><br />
                a) Libra esterlina<br />
                b) Euro<br />
                c) Dolar
            </p>
        );
    }
    if (props.cont === 2) {
        return (
            <p>2.	Moneda usada en Rusia<br /><br />
                a)	Rublo ruso<br />
                b)  Dolar<br />
                c)	Euro ruso
            </p>
        );
    }
    if (props.cont === 3) {
        return (
            <p>3.	Moneda usada en China<br /><br />
                a)	Dolar<br />
                b)  Renminbi<br />
                c)	Yuan
            </p>
        );
    }
    if (props.cont === 4) {
        return (
            <p>4.	Moneda usada en Colombia<br /><br />
                a)	Bolivar<br />
                b)  Dolar<br />
                c)	Peso
            </p>
        );
    }
    if (props.cont === 5) {
        return (
            <p>5.	Moneda usada en Brasil<br /><br />
                a)	Peso brasileño<br />
                b)  Euro brasileño<br />
                c)	Real brasileño
            </p>
        );
    }
    if (props.cont === 6) {
        return (
            <p>6.	Moneda usada en Suiza<br /><br />
                a)	Franco suizo<br />
                b)  Euro suizo<br />
                c)	Libra suiza
            </p>
        );
    }
    if (props.cont === 7) {
        return (
            <p>7.	Moneda usada en Checoslovaquia<br /><br />
                a)	Corona checoslovaco<br />
                b)  Libra checoslovaca<br />
                c)	Corona checoslovaca
            </p>
        );
    }
    if (props.cont === 8) {
        return (
            <p>8.	Moneda usada en España<br /><br />
                a)	Libra<br />
                b)  Euro<br />
                c)	Peso Español
            </p>
        );
    }
}

export default Numero;