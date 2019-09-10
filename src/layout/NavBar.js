import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import "../App.css";


export class NavBar extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render() {

        const { id, email } = this.props.user

        return (
            <div className="nav-bar">
                <div className="nav-contents">
                <Link to='/projects' className="btn btn-primary"> Project Feed</Link>
                <Link to={`/users/${id}`} className="btn btn-primary"> Profile </Link>
                <Link to='/new-project' className="btn btn-primary"> New Project</Link>
                <>you are logged in under {email}</>
                </div>
            </div>
        )
    }
}

export default NavBar
