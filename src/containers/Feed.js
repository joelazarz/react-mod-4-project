import React from 'react'
import ProjectCard from "../components/ProjectCard"

class Feed extends React.Component {

  state = {
    projects: [],
    users: []
  }

  showProject = (e, project) => {
    console.log(project)
    return
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
        {this.state.projects.map(project => <ProjectCard key={"project" + project.id} project={project} user={this.state.users.find(user => user.id === project.user_id)} showProject={this.showProject}/>)}
      </div>
    )
  }
}

export default Feed