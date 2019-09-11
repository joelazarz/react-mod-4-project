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
                
                <h6><a href={repo_link}>{repo_link}</a></h6>
                <p>{description}</p>
                <br/>
                <h5>Langauges: {languages}</h5>
                <div>Collaborators: <ul>
                    {users.map(user => <li>{user.name}</li>)}
                    </ul></div>
                </div>
            </div>
        )
    }

}

export default ProjectInfo
