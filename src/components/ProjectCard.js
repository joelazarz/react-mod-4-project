import React from 'react'

const ProjectCard = props => {

  return (
    <div onClick={(e) => props.showProject(e, props.project)}>

      <h1>{props.project.name}</h1>
      <p>Languages: {props.project.languages} 
      </p>
      <p> Project Owner: {props.user.name}</p>

    </div>
  )
}

export default ProjectCard