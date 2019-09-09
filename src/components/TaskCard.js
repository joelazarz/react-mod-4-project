import React, { Component, Fragment } from 'react'

export class TaskCard extends Component {


    render() {

        const { name, description } = this.props.task;

        return (
            <Fragment>
                {name}
            </Fragment>
        )
    }
}

export default TaskCard
