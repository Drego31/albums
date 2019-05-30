import React from 'react'

const OAlbumsList = (props) => {
  return (
    <ul>
      {props.items.map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  )
}

export default OAlbumsList
