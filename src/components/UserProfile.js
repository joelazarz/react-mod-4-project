import React, { Component } from 'react'

class UserProfile extends Component {

  state = {
    userObj: null
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.user.id}`)
    .then(resp => resp.json())
    // .then(data => console.log('USERPROFILE', data))
    .then(data => {this.setState({userObj: data}) 
    console.log('STATE AFTER setState', this.state)})
  }

  render(){

    const {name, github_link} = this.props.user

    return (
    <div>
      {this.state.userObj ? 
    (<div>
      <h1>{name}</h1>
      <h4>{github_link}</h4>
      <h2>My Projects:</h2>
      <ul>
        {this.state.userObj.owned_projects.map(project => <li>{this.props.drawProjectCard(project)}</li>)}
      </ul>
      <hr/>
      <h2>Projects I'm Working On:</h2>
      <ul>
      {this.state.userObj.projects.map(project => <li>{this.props.drawProjectCard(project)}</li>)}
      </ul>
    </div>) : null}
    </div>  
  )
  }
  
}

export default UserProfile