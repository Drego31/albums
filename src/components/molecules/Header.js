import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="m-header">
      <span className="a-title f-site">Albums</span>
      -
      <span className="a-title f-page">some</span>
      ||
      <Link to={'/'} className="nav-link"> Home </Link>
      <Link to={'/album/124124'} className="nav-link">Album 1</Link>
    </div>
  )
}

export default Header
