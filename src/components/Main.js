import Photo from 'components/pages/Photo'
import Home from 'components/pages/Home'
import Album from 'components/pages/Album'

require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import User from 'components/pages/User'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="m-navigation">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/album/124124'} className="nav-link">Album 1</Link></li>
            </ul>
          </nav>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/album/:albumId' component={Album}/>
            <Route path='/photo/:photoId' component={Photo}/>
            <Route path='/user/:userId' component={User}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppComponent
