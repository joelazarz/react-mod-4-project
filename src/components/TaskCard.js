import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types';

export class TaskCard extends Component {

    state = { clicked: false }

    static propTypes = {
        task: PropTypes.object.isRequired
    }

    displayDescription = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        const { name, description } = this.props.task;

        const isClicked = this.state.clicked;
        
        return (
            <Fragment>
                <div 
                className="task-card-name"
                onClick={this.displayDescription}>
                {name}</div>
                {isClicked ? (<div
                className="task-card-description">
                {description}</div>) : (<div></div>)}
            </Fragment>
        )
    }
}

export default TaskCard
