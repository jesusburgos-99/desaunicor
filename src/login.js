import React, { Component } from 'react'

class loging extends Component {

    constructor() {
        super()
        this.IdName = React.createRef()
   
    }

    enviar = (e) => {

        if (this.IdName.current.value !== "") {
            e.preventDefault()
            let user = this.IdName.current.value
            
            this.props.IdName(user)
        }
        else {
            window.alert("Rellene la informacion requerida")
        }

    }

    render() {
        return (
            <div className="login">
                <div className="loghea">Digite sus nombres</div>
                <div className="loguser">
                    <input type="text" placeholder="IdNames" ref={this.IdName} />
                </div>
                <div>
                    <button onClick={this.enviar}>Iniciar</button>
                </div>
            </div>
        )
    }
}

export default loging