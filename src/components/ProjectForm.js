import React from 'react'
import { Redirect } from 'react-router-dom'
import "../App.css";

class ProjectForm extends React.Component {
  
  state={
    name: "",
    description: "",
    repo_link: "",
    languages: "",
    user_id: this.props.user.id
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createProject = (e) => {
    e.preventDefault()
    this.setState({user_id: this.props.user.id})
    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => this.props.showProject(e, data))
    .then(this.props.redirect)
  
  }

  render(){

    return (
      
    <div className="new-project-form-display">
      <h3>New Project</h3>
      <form onSubmit={this.createProject}>

        <div className="form-group">
          <label>
            <input 
            className="form-control form-control-lg" 
            placeholder="Project Name" 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div className="form-group">
          <label>
            <textarea 
            className="form-control form-control-lg" 
            placeholder="Project Description" 
            type="text" name="description" 
            value={this.state.description} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div className="form-group">
          <label>
            <input 
            className="form-control form-control-lg" 
            placeholder="Github Link" 
            type="text" 
            name="repo_link" 
            value={this.state.repo_link} 
            onChange={this.handleChange}/>
            </label>
        </div>

        <div className="form-group">
          <label>
            <input 
            className="form-control form-control-lg" 
            placeholder="Project Languages" 
            type="text" 
            name="languages" 
            value={this.state.languages} 
            onChange={this.handleChange} />
            </label>
        </div>

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>

      </div>)
  }
}

export default ProjectForm