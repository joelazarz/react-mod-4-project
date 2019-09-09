import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import TaskCard from './TaskCard'
import { NewTaskForm } from './NewTaskForm';
import { ProjectInfo } from './ProjectInfo';
import './ProjectCss.css';


class ProjectSpecs extends Component {

    state = { tasks: [],
        collaborator: false,
       
    }

    componentDidMount(){
        const projId = this.props.projectId;
        fetch(`http://localhost:3000/projects/${projId}`)
        .then(resp => resp.json())
        .then(data => this.setState({ tasks: data.tasks }))
        if (this.props.project.user.id !== this.props.user.id && this.props.project.users.some(user => user.id === this.props.user.id)) {
            this.setState({collaborator: true})
        }
    }

    static propTypes = {
        project: PropTypes.object.isRequired,
        projectId: PropTypes.number.isRequired
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData("id");
        let theTask = this.state.tasks.find(task => task.name === id)
        let taskId = theTask.id
        
        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
                task.category = cat;
            } 
            return task;
        });
        this.setState({ ...this.state,tasks });
        this.patchFunc(cat, taskId)
        if (theTask.users.length < 1 && cat === "wip") {
            this.assignTask(taskId)
        }
    }

    patchFunc = (cat, taskId) => {       
        fetch(`http://localhost:3000/tasks/${taskId}`,{
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ category: cat })
        })
    }

    assignTask = (taskId) => {
        fetch('http://localhost:3000/user_tasks',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: this.props.user.id, task_id: taskId})
        })
        // .then(this.setState({tasks: [this.state.tasks.filter(taskObj => taskObj.id !== theTask.id), theTask]}))
        
    }

    addTask = (taskObj) => {
        fetch('http://localhost:3000/tasks',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify( taskObj )
        })
        .then(resp => resp.json())
        .then(data => this.setState( { tasks: [...this.state.tasks, data] } ))
    }

    collaborate = () => {
        fetch('http://localhost:3000/user_projects',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: this.props.user.id, project_id: this.props.project.id})
        })
        this.setState({collaborator: true})
    }

    render() {

        let tasks = { todo: [], wip: [], complete: [] }
        
        this.state.tasks.forEach ((task) => {
            tasks[task.category].push(
                <div key={task.name+task.id} 
                onDragStart = {(e) => this.onDragStart(e, task.name)}
                draggable
                className="draggable"
                id={task.category}
                >
            <TaskCard key={"task"+task.id} task={task} assigned={this.state.assigned} />
            </div>
            );
        });
        
        const dragOverAction = (e)=>this.onDragOver(e)

        const { name } = this.props.project;
        
        return (
            <Fragment>
            {this.props.project.user.id === this.props.user.id ? <div></div> : this.state.collaborator ? (<h3>You are collaborating on this project!</h3>) : (<button onClick={this.collaborate}>Collaborate on this Project</button>)}    
            <div className="container-drag">
                <h2>{name}</h2>

                <div className="project-display">

                <div className="todo"
                    onDragOver={dragOverAction}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">To Do</span>
                    {tasks.todo}
                </div>

                <div className="wip"
                    onDragOver={dragOverAction}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">IN PROGRESS</span>
                    {tasks.wip}
                </div>

                <div className="complete" 
                    onDragOver={dragOverAction}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                    <span className="task-header">COMPLETED</span>
                    {tasks.complete}
                </div>

                <div className="project-sidebar">
                <ProjectInfo key={"info" + this.props.project.id} project={this.props.project}/>
                <NewTaskForm key={"new-task"+this.props.project.id} project={this.props.project} addTask={this.addTask}/>
                </div>
                </div>
            </div>
            </Fragment>
        );
    }
    
}


export default ProjectSpecs;