import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Frame1 from './views/frame1'
import Frame3 from './views/frame3'
import Frame4 from './views/frame4'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Frame1} exact path="/" />
        <Route component={Frame3} exact path="/frame3" />
        <Route component={Frame4} exact path="/frame4" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
