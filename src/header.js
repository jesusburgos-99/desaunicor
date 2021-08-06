import React, { Component } from 'react'
import img from './avatar.png';

class Header extends Component {

  salir = () => {
    if (true === window.confirm("Se perdera todo el progreso, ¿Desea continuar?")) {
      this.props.salir("")
      this.props.reset()
    }
  }
  render() {
    if (this.props.user === "") {
      return (
        <header>
          <h1>Prueba de finanzas</h1>
        </header>
      )
    } else {
      return (

        <header>
          <nav>
            <h2> <img src={img} width="50" height="50"/> {this.props.user}</h2>
            <i className="fas fa-sign-out-alt salir" onClick={this.salir}></i>
          </nav>
        </header>
      )
    }
  }
}

export default Header
