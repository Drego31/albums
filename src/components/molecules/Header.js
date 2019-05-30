import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class MHeader extends React.Component {
  render() {
    return (
      <div className="m-header">
        <Link to='/' className="a-title f-site">Albums</Link>
        <span className="a-subtitle f-header">by Dominik Betka</span>
      </div>
    )
  }
}

export default withRouter(MHeader)
