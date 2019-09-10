import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export class Home extends Component {

    state = {
        LoginForm: false
    }

    render() {
        return (
            <div>
            {
                this.state.LoginForm 
                ? <Login setUser={this.props.setUser} />
                : <SignUp setUser={this.props.setUser} />
            }
            <button className="btn btn-secondary" onClick={() => this.setState({LoginForm: !this.state.LoginForm})}>Toggle Login / Sign up</button>
            </div>
        )
    }
}

export default Home
