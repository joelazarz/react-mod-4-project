import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types';

export class TaskCard extends Component {

    state = { clicked: false}

    static propTypes = {
        task: PropTypes.object.isRequired
    }

    displayDescription = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        const { name, description, users, category } = this.props.task;

        const isClicked = this.state.clicked;
        
        return (
            <Fragment>
                <div className="task-card-name"
                onClick={this.displayDescription}>
                <h6 className="text-center">{name}</h6></div>
                {isClicked ? (
                <div className="task-card-description">
                {description}<hr/>  {category !=="todo" ? (
                    <div> Assigned to Task: {users[0].name} 
                        <button className="btn btn-sm btn-danger delete-task" onClick={(e) => this.props.deleteTask(e,this.props.task)}>Delete</button>
                    </div> ): <button className="btn btn-sm btn-danger delete-task" onClick={(e) => this.props.deleteTask(e,this.props.task)}>Delete</button>}</div>) : (<div></div>)}
            </Fragment>
        )
    }
}

export default TaskCard
