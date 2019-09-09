import React from 'react'

const UserProfile = props => {

  const user = props.user

  return (
    <div>
      <h1>{user.name}</h1>
      <h4>{user.github_link}</h4>
      <h2>My Projects:</h2>
      <ul>
        {user.owned_projects.map(project => <li>{props.drawProjectCard(project)}</li>)}
      </ul>
      <hr/>
      <h2>Projects I'm Working On:</h2>
      <ul>
      {user.projects.map(project => <li>{props.drawProjectCard(project)}</li>)}
      </ul>
    </div>
  )
}

export default UserProfile