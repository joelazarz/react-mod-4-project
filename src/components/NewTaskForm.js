import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import './ProjectCss.css';

export class NewTaskForm extends Component {
    
    state = { name: "", description: "", category: "todo", project_id: this.props.project.id }

    static propTypes = {
        project: PropTypes.object.isRequired,
        addTask: PropTypes.func.isRequired
    }


    changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        this.props.addTask(this.state)
        this.setState({ name: "", description: "" })
    }

    render(){

        const { name, description } = this.state
    
        return (
            <div className="new-task-form">
                <div className="new-task-form-content">
                <div className="new-task-header"><i className="fas fa-sticky-note"></i> New Task </div>
                <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Task name..." value={name} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="description" placeholder="Task Description..." value={description} onChange={this.changeHandler}/>
                </div>
                <input className="btn btn-primary" type="submit" />
                </form>
                </div>
            </div>
        )
    }

}

export default NewTaskForm
