import React, { Component } from 'react'
import Preguntas from './preguntas'
import Resultado from './Resultados'

class Prueba extends Component {

    constructor(props) {

        super(props)

        this.state = {
            contador: 1,
            Resultado: ['a', 'a', 'b', 'c', 'c', 'a', 'c', 'b']
        }
    }

    sumar = () => {
        if (this.state.contador <= 8) {
            this.setState({
                contador: this.state.contador + 1
            });
        }
    }
    restar = () => {
        if (this.state.contador > 1) {
            this.setState({
                contador: this.state.contador - 1
            });
        }
    }

    salir = () => {
        this.props.salir("")
        this.props.reset()
    }

    render() {
        let r = this.state.contador
        if (r <= 8) {
            return (
                <React.StrictMode>
                    <Preguntas guar={this.props.guard} cont={this.state.contador} sol={this.props.respu} ant={this.restar} sig={this.sumar} />
                </React.StrictMode>
            )
        }
        else {

            return (
                <div className="resultado">
                    <Resultado sol='1' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='2' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='3' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='4' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='5' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='6' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='7' res={this.props.respu} solu={this.state.Resultado} />
                    <Resultado sol='8' res={this.props.respu} solu={this.state.Resultado} />
                    <booton className='fin'>
                        <i className="fas fa-sign-out-alt salir" onClick={this.salir}></i>
                    </booton>
                </div>
            )
        }
    }
}

export default Prueba;