import React, { Component } from 'react'
import { withRouter } from 'react-router'

class SignUp extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('userId', data.id)
                console.log(data)
                this.props.setUser(data)
                this.props.history.push('/projects')
            })
    
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        console.log('SIGN UP PROPS: ', this.props)
        console.log('SIGN UP  STATE:', this.state)
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                <label>Email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label>
                <label>Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(SignUp)
