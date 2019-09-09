import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import "../App.css";


export class NavBar extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render() {

        const { id } = this.props.user

        return (
            <div className="nav-bar">
                <Link to='/projects' className="nav-links"> Project Feed</Link>
                <Link to={`/users/${id}`} className="nav-links"> Profile </Link>
                <Link to='/new-project' className="nav-links"> New Project</Link>
            </div>
        )
    }
}

export default NavBar
