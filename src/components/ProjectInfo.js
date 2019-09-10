import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import './ProjectCss.css';

export class ProjectInfo extends Component {

    static propTypes = {
        project: PropTypes.object.isRequired
    }

    render() {

        const { name, description, languages, repo_link, users} = this.props.project

        return (
            <div className="project-info">
                <div style={{marginLeft: .5 + "em"}}>
                <h4 style={{textAlign: "center"}}>{name}</h4>
                
                <p>{repo_link}</p>
                <div>{description}</div>
                <br/>
                <div>Langauges: {languages}</div>
                <div>Collaborators: <ul>
                    {users.map(user => <li>{user.name}</li>)}
                    </ul></div>
                </div>
            </div>
        )
    }

}

export default ProjectInfo
