import React from 'react'
import ProjectCard from "../components/ProjectCard"

class Feed extends React.Component {

  state = {
    projects: [],
    users: []
  }

  showProject = () => {
    return
  }

  componentDidMount(){
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(data => this.setState({users: data}))
    fetch("http://localhost:3000/projects")
    .then(resp => resp.json())
    .then(data => this.setState({projects: data}))
  }
  render() {
    return (
      <div>
        {this.state.projects.map(project => <ProjectCard key={"project" + project.id} project={project} user={this.state.users.find(user => user.id === project.user_id)}/>)}
      </div>
    )
  }
}

export default Feed