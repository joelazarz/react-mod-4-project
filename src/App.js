import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Feed from "./containers/Feed"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path="/projects" component={Feed} />
        </Router>
      </div>
    )
  }
}

export default App

