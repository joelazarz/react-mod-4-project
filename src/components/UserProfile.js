import React, { Component } from 'react'
import Spinner from '../containers/Spinner'

class UserProfile extends Component {

  state = {
    userObj: null
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.user.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({userObj: data})) 
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
        {this.state.userObj.owned_projects.map(project =><div>{this.props.drawProjectCard(project)}</div>)}
      <hr/>
      <h2>Projects I'm Working On:</h2>
      {this.state.userObj.projects.map(project => <div>{this.props.drawProjectCard(project)}</div>)}
    
    </div>) : (<Spinner />)}
    </div>  
  )
  }
  
}

export default UserProfile