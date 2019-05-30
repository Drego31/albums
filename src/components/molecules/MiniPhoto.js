import React from 'react'
import {Link} from 'react-router-dom'

const MMiniPhoto = (props) => {
  return (
    <Link to={`/photo/${props.photo.id}`} className="m-mini-photo">
      <img className="a-photo f-mini" src={props.photo.thumbnailUrl} />
      <div className="a-title f-photo">{props.photo.title}</div>
    </Link>
  )
}

export default MMiniPhoto
