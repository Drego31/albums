import MHeader from 'components/molecules/Header'

require('normalize.css/normalize.css')
require('styles/index.sass')

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {LINKS} from '../utils/macros'

class AppComponent extends React.Component {
  constructor() {
    super()
  }

  generateRoutes() {
    return LINKS.map(({component, path, exact = false}) => (
      <Route key={path} exact={exact} path={path} component={component}/>
    ))
  }

  render() {
    return (
      <Router>
        <div className='o-content'>
          <MHeader/>
          <Switch>
            {this.generateRoutes()}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppComponent
