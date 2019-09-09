import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import './ProjectCss.css';

export class ProjectInfo extends Component {

    static propTypes = {
        project: PropTypes.object.isRequired
    }

    render() {

        const { name, description, languages, repo_link} = this.props.project

        return (
            <div className="project-info">
                <div>{name}</div>
                <div>{repo_link}</div>
                <div>{description}</div>
                <div>{languages}</div>
            </div>
        )
    }

}

export default ProjectInfo
