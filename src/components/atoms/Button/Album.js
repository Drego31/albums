import React from 'react'
import {Link} from 'react-router-dom'

const AButtonAlbum = (props) => {
  return (
    <Link className="a-button f-album" to={props.to}>
      <div className="a-title f-album-button">{props.title}</div>
      <div className="a-subtitle f-album-button">{props.user}</div>
    </Link>
  )
}

export default AButtonAlbum
