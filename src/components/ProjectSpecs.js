import React from 'react'
import { Redirect } from 'react-router-dom'

const ProjectSpecs = props => {
  return (
    <div>
    {props.project.name}
    <div>A project!</div>
    </div>
  )
}

export default ProjectSpecs