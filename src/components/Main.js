import Photo from 'components/pages/Photo'
import Home from 'components/pages/Home'
import Album from 'components/pages/Album'

require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import User from 'components/pages/User'
import Header from 'components/molecules/Header'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
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
