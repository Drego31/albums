import React from 'react'
import {withRouter, Link} from 'react-router-dom'

class MHeader extends React.Component {
  render() {
    return (
      <div className="m-header">
        <span className="a-title f-site">Albums</span>
        -
        <span className="a-title f-page">{this.props.location.pathname}</span>
        <Link to={'/'} className="nav-link"> Back to albums </Link>
      </div>
    )
  }
}

export default withRouter(MHeader)
