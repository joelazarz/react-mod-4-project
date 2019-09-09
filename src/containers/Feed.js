import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ProjectCard from "../components/ProjectCard"
import ProjectSpecs from "../components/ProjectSpecs"


class Feed extends React.Component {

  state = {
    projects: [],
    redirect: ""
  }

  componentDidMount(){
    Promise.all ([
      fetch("http://localhost:3000/projects")
    ]) 
    .then(([res1])=> { 
      return Promise.all([res1.json()]) 
    })
    .then(([res1]) => this.setState({projects: res1}))
  }

  render() {
    return (
      <div>
      {this.state.projects.length > 0 ? ( <div>
        {this.props.redirect}
        <Route path="/projects/:id" render={(routerProps) =>{
              let id = parseInt(routerProps.match.params.id)
              console.log(id)
              console.log(this.state.projects)
              let project = this.state.projects.find(project => project.id === id)
              console.log(project)
              return <ProjectSpecs project={project} projectId={project.id} user={this.props.user}/>
        }} />
        <Route exact path="/projects" render={() => (
          <div>
          {this.state.projects.map(project => <ProjectCard key={"project" + project.id} project={project} user={project.user} showProject={this.props.showProject}/>)}
          </div>
        )} /> </div>)
        : (<h1>Loading</h1>)
      }
      </div>
    )
  }
}

export default Feed