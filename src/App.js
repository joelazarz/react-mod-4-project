import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Feed from "./containers/Feed"
import Project from "./project-show/Project"

class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/projects" component={Feed} />
          <Route path="/project" component={Project} />
        </Router>
      </Fragment>
    )
  }
}

export default App

