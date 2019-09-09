import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Feed from "./containers/Feed"
import UserProfile from "./components/UserProfile"
import ProjectCard from "./components/ProjectCard"
import Login from "./components/Login"
import ProjectForm from "./components/ProjectForm"

class App extends Component {

  state={
    users: [],
    user: {},
    redirect: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/")
    .then(resp => resp.json())
    .then(data => this.setState({users: data, user: data[1]}))
  }

  showProject = (e, project) => {
    this.setState({redirect: <Redirect to={`/projects/${project.id}`}/>})
  }

  drawProjectCard = (project) => {
    return (<ProjectCard project={project} user={this.state.users.find(user => user.id === project.user_id)} key={"project"+project.id} showProject={this.showProject} />)
  } 

  render() {
    const user = this.state.user
    return (
      <Fragment>
        <Router>
          {this.state.redirect}
          <Route exact path="/" component={Login}/>
          <Route exact path="/new-project" render={() => <ProjectForm showProject={this.showProject} redirect={this.state.redirect}/>} />
          <Route path="/projects" render={() => <Feed showProject={this.showProject} redirect={this.state.redirect} user={user}/>} /> 
          <Route path={`/users/${user.id}`} render={() => <UserProfile user={user} drawProjectCard={this.drawProjectCard}/>} />
          
        </Router>
      </Fragment>
    )
  }
}

export default App

