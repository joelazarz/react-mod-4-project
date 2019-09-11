import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import "../App.css";


export class NavBar extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    }

    render() {

        const { id, email, name } = this.props.user

        return (
            <div className="nav-bar">
                <div className="nav-contents">
                <Link to='/projects' className="btn btn-primary"> Project Feed</Link>
                <Link to={`/users/${id}`} className="btn btn-primary"> Profile </Link>
                <Link to='/new-project' className="btn btn-primary"> New Project</Link>
                {name ?
                <div className='login-status'>
                    <h5 className='login-badge'><span class="badge badge-success"> Welcome {name}</span></h5>
                </div>
                    : (<></>)
                }
                </div>
            </div>
        )
    }
}

export default NavBar
