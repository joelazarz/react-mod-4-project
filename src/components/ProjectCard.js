import React from 'react'
import { Redirect } from 'react-router-dom'

const ProjectCard = props => {
  
  const project = props.project
  
  return (

    <div onClick={(e) => props.showProject(e, project)}>
      <div className="feed-project-card">
      <div className="card">
      <div className="card-body">
      <h4><div className="card-title">{project.name}</div></h4>
      <p>Languages: {project.languages} 
      </p>
      <h6> Project Owner: {props.user.name}</h6>
      </div>
    </div>
    </div>
    </div>

  )
}

export default ProjectCard