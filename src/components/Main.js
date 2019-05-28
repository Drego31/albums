
require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router'
import Albums from 'components/smart/Albums'
import Photos from 'components/smart/Photos'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="main">
        <div>Title</div>
        <Router>
          <div className="container">
            <Route exact path="/albums" component={Albums}/>
            <Route path="/photos" component={Photos}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default AppComponent
