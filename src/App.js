import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Feed from "./containers/Feed"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Feed} />
        </Router>
      </div>
    )
  }
}

export default App

