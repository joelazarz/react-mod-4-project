import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import ProjectCard from "../components/ProjectCard"
import Project from "../components/Project"


class Feed extends React.Component {

  state = {
    projects: [],
    users: [],
    redirect: ""
  }

  showProject = (e, project) => {
    this.setState({redirect: <Redirect to={`/projects/${project.id}`}/>})
  }

  componentDidMount(){
    Promise.all ([
      fetch("http://localhost:3000/users"),
      fetch("http://localhost:3000/projects")
    ]) 
    .then(([res1, res2])=> { 
      return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([res1, res2]) => this.setState({users: res1, projects: res2}))
  }

  render() {
    return (
      <div>
      {this.state.projects.length > 0 ? ( <div>
        {this.state.redirect}
        <Route path="/projects/:id" render={(routerProps) =>{
              let id = parseInt(routerProps.match.params.id)
              console.log(id)
              console.log(this.state.projects)
              let project = this.state.projects.find(project => project.id === id)
              console.log(project)
              return <Project />
        }} />
        <Route exact path="/projects" render={() => (
          <div>
          {this.state.projects.map(project => <ProjectCard key={"project" + project.id} project={project} user={this.state.users.find(user => user.id === project.user_id)} showProject={this.showProject}/>)}
          </div>
        )} /> </div>)
        : (<h1>Loading</h1>)
      }
      </div>
    )
  }
}

export default Feed