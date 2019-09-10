import React, { Component, Fragment } from 'react'

class Login extends Component {
  
  state={
    LoginForm: false,
    user: {
      name: "",
      github_link: "",
      email:"",
      skills: "" ,
      password:""
    }
  }

  createUser () {

  }

  handleChange = (e) => {
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  }

  render() {

    return(
      <Fragment>

      {
        this.state.LoginForm ? 
        (<div><h1>Log-in</h1>
        <form>
        <label>E-mail:<input type="email" name="email" value={this.state.user.email} onChange={this.handleChange}/></label>
          <label>Password:<input type="password" name="password" value={this.state.user.password} onChange={this.handleChange}/></label>
          <input type="submit" value="Submit" />
        </form>
        <hr/>
        <button onClick={() => this.setState({LoginForm: !this.state.LoginForm})}>Sign Up</button></div>)

        :

        (<div><h1>Sign Up</h1>
        <form>
          <label>Name:<input type="text" name="name" value={this.state.user.name} onChange={this.handleChange}/></label>
          <label>Github:<input type="text" name="github_link" value={this.state.user.github_link} onChange={this.handleChange}/></label>
          <label>Skills:<input type="text" name="skills" value={this.state.user.skills} onChange={this.handleChange}/></label>
          <label>E-mail:<input type="email" name="email" value={this.state.user.email} onChange={this.handleChange}/></label>
          <label>Password:<input type="password" name="password" value={this.state.user.pasword} onChange={this.handleChange}/></label>
          <input type="submit" value="Submit" />
        </form>
        <hr/>
        <button onClick={() => this.setState({LoginForm: !this.state.LoginForm})}>Log-in</button></div>)  
      }

      </Fragment>
    )

  }

}

export default Login