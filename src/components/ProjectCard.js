import React from 'react'
import { Redirect } from 'react-router-dom'

const ProjectCard = props => {
  
  const project = props.project
  
  return (

    <div onClick={(e) => props.showProject(e, project)}>

      <h1>{project.name}</h1>
      <p>Languages: {project.languages} 
      </p>
      <p> Project Owner: {props.user.name}</p>

    </div>
  )
}

export default ProjectCard