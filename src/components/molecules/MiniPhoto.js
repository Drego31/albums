import React from 'react'
import {Link} from 'react-router-dom'

const MMiniPhoto = (props) => {
  function getPhotoUrl(url) {
    return typeof url !== 'undefined' ? {backgroundImage: `url(${url})`} : {}
  }

  return (
    <Link to={`/photo/${props.photo.id}`} className="m-mini-photo">
      <div className="a-photo" style={getPhotoUrl(props.photo.url)} />
      <div className="a-title f-photo">{props.photo.title}</div>
    </Link>
  )
}

export default MMiniPhoto
