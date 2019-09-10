import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Login extends Component {
  
  state= {
    email: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {

        localStorage.setItem('token', data.token)

        this.props.setUser(data.user)
        console.log('LOGIN HANDLE SUBMIT DATA.USER:', data.user)
        this.props.history.push('/projects')
      })

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    console.log('LOGIN PROPS: ', this.props)
    console.log('LOGIN STATE:', this.state)
    return (
      <div className="new-project-form-display">
      <h2>Log-in</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Email:<input className="form-control form-control-lg" type="email" name="email" value={this.state.email} onChange={this.handleChange}/></label>
        </div>
        <div className="form-group">
        <label>Password:<input className="form-control form-control-lg" type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withRouter(Login)