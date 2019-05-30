import PPhoto from 'components/pages/Photo'
import PHome from 'components/pages/Home'
import PAlbum from 'components/pages/Album'
import PUser from 'components/pages/User'
import MHeader from 'components/molecules/Header'

require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <MHeader/>
          <Switch>
            <Route exact path='/' component={PHome}/>
            <Route path='/album/:albumId' component={PAlbum}/>
            <Route path='/photo/:photoId' component={PPhoto}/>
            <Route path='/user/:userId' component={PUser}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppComponent
