import React, { Component } from 'react'
import Login from './login'
import Header from './header'
import Prueba from './Prueba'
class App extends Component {

    constructor() {

        super()

        this.state = {
            users: "",
            respuestas: []

        }
    }
    Info = (e) => {
        this.setState({
            users: e
        })
    }
    guadar = (val) => {
        this.setState({
            respuestas: this.state.respuestas.concat([val])
        })

    }
    borrar =()=>{
        this.setState({
            respuestas: []
        })
    }
    render() {
        if (this.state.users === "") {
            return (
                <React.StrictMode>
                    <Header user={this.state.users} />
                    <Login IdName={this.Info} />
                </React.StrictMode>
            )
        }
        else {
            return (
                <React.StrictMode>
                    <Header user={this.state.users} salir={this.Info} reset={this.borrar}/>
                    <Prueba salir={this.Info} reset={this.borrar} guard={this.guadar} respu={this.state.respuestas}/>
                </React.StrictMode>
            )
        }
    }
}

export default App
