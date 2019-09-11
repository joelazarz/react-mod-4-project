import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const ProjectCard = props => {
  
  const project = props.project
  
  return (
    <div >
      <div className="feed-project-card">
      <div className="card text-center">
      <Link to={`/projects/${project.id}`}>
      <div className="card-body">
      <h4><div className="card-title">{project.name}</div></h4>
      <p>Languages: {project.languages} 
      </p>
      <h6> Project Owner: {project.user.name}</h6>
      </div>
      </Link>
    </div>
    </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  showProject: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default ProjectCard