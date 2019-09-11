import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import "../App.css";


export class NavBar extends Component {

    state = {
        login: false
    }


    static propTypes = {
        user: PropTypes.object.isRequired
    }

    clickHandler = () => {
        window.localStorage.removeItem('token')
        this.setState({ login : !this.state.login })
    }

    render() {

        const { id, name } = this.props.user

        return (
            <div className="nav-bar">
                <div className="nav-contents">
                <Link to='/projects' className="btn btn-primary"> Project Feed</Link>
                <Link to={`/users/${id}`} className="btn btn-primary"> Profile </Link>
                <Link to='/new-project' className="btn btn-primary"> New Project</Link>
                {name && this.state.login ?
                <div className='login-status'>
                    <h5 className='login-badge'><span class="badge badge-success"> Welcome {name}</span></h5>
                    <Link to='/'><h5 onClick={this.clickHandler} className='login-badge'><span class="badge badge-dark"> Logout</span></h5></Link>
                </div>
                    : (<div className='login-status'>
                    <Link to='/'><h5 onClick={this.clickHandler} className='login-badge'><span class="badge badge-light"> Please Login or Sign Up</span></h5></Link>
                </div>)
                }
                </div>
            </div>
        )
    }
}

export default NavBar
