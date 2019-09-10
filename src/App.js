import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, browserHistory} from 'react-router-dom'
import Feed from "./containers/Feed"
import { NavBar } from './layout/NavBar';
import UserProfile from "./components/UserProfile"
import ProjectCard from "./components/ProjectCard"
import Home from "./components/Home/Home"
import ProjectForm from "./components/ProjectForm"

class App extends Component {

  state= {
    user: {},
    redirect: ""
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`http://localhost:3000/autologin`, { 
        headers: {
          'accept': 'application/json', 
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('COMPDIDMOUNT DATA:', data)
          this.setState({user: data})
          // this.props.history.push('/projects')
        })        
    }
  }


  showProject = (e, project) => {
    this.setState({redirect: <Redirect to={`/projects/${project.id}`}/>})
  }

  drawProjectCard = (project) => {
    return (<ProjectCard project={project} user={this.state.users.find(user => user.id === project.user_id)} key={"project"+project.id} showProject={this.showProject} />)
  }
  
  
  setUser = user => {
    this.setState({ user: user })
  }

  render() {
    console.log('APP STATE', this.state.user)
    const user = this.state.user
    return (
      <Fragment>
        <Router>
        <NavBar user={this.state.user}/>
          {this.state.redirect}

          <Route exact path="/" render={() => <Home user={this.state.user} setUser={this.setUser} />} />

          <Route exact path="/new-project" render={() => <ProjectForm user={this.state.user} showProject={this.showProject} redirect={this.state.redirect}/>} />
          <Route exact path="/projects" render={() => <Feed showProject={this.showProject} redirect={this.state.redirect} user={user}/>} /> 
          <Route exact path={`/users/${user.id}`} render={() => <UserProfile user={user} drawProjectCard={this.drawProjectCard}/>} />
          
        </Router>
      </Fragment>
    )
  }
}

export default App

