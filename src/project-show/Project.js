import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ProjectCss.css';

class Project extends Component {

    state = { tasks: [] }

    componentDidMount(){
        fetch("http://localhost:3000/tasks")
        .then(resp => resp.json())
        .then(tasks => this.setState({ tasks: tasks }))
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData("id", id);
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((task) => {
            if (task.name === id) {
            task.category = cat;
            } 
        return task;
        });

        this.setState({ ...this.state,tasks });
    }

    render() {

        var tasks = { todo: [], wip: [], complete: [] }

        this.state.tasks.forEach ((task) => {
            tasks[task.category].push(
            <div key={task.name} 
            onDragStart = {(e) => this.onDragStart(e, task.name)}
            draggable
            className="draggable"
            id={task.category}
            >
            Task: {task.name}
            Description: {task.description}
            </div>
            );
        });

        const dragOverAction = (e)=>this.onDragOver(e)

        return (
            <div className="container-drag">
                <h2 className="header">Project</h2>

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
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>

                <div className="complete" 
                    onDragOver={dragOverAction}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                    <span className="task-header">COMPLETED</span>
                    {tasks.complete}
                </div>

                </div>
            </div>
        );
        }

}

ReactDOM.render(<Project />, document.getElementById('root'));


export default Project;