
require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import Albums from 'components/smart/Albums'
import Photos from 'components/smart/Photos'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Albums </Link></li>
              <li><Link to={'/photos'} className="nav-link">Photos</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Albums} />
            <Route path='/photos' component={Photos} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppComponent
