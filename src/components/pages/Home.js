
import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {albums: []}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/')
      .then(response => response.json())
      .then(json => this.state.albums = json)
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="albums">
        {this.state.albums.map(album => {
          return <Link to={`/album/${album.id}`} key={album.id}>{album.title} {album.userId}</Link>
        })}
      </div>
    )
  }
}

export default Home
