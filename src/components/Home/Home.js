import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export class Home extends Component {

    state = {
        LoginForm: false
    }

    render() {
        return (
            <div className="home-content">
            {
                this.state.LoginForm 
                ? <Login setUser={this.props.setUser} />
                : <SignUp setUser={this.props.setUser} />
            }
            <div className="toggle-button">
            <button className="btn btn-secondary" onClick={() => this.setState({LoginForm: !this.state.LoginForm})}>Toggle Login / Sign up</button>
            </div>
            </div>
        )
    }
}

export default Home
