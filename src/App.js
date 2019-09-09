import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Feed from "./containers/Feed"

class App extends Component {

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/projects" component={Feed} />
        </Router>
      </Fragment>
    )
  }
}

export default App

