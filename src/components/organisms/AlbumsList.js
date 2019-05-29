import React from 'react'

const AlbumsList = (props) => {
  return (
    <ul>
      {props.items.map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  )
}

export default AlbumsList
