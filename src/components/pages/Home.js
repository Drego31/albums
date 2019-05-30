
import React from 'react'
import AButtonAlbum from 'components/atoms/Button/Album'

class PHome extends React.Component {
  constructor() {
    super()
    this.state = {albums: []}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/')
      .then(response => response.json())
      .then(json => this.state.albums = json)
      .catch(e => console.error(e))
  }

  render() {
    return (
      <div className="albums">
        {this.state.albums.map(album => {
          return (
            <AButtonAlbum
              to={`/album/${album.id}`}
              key={album.id}
              title={album.title}
              user={album.userId}
            />
          )
        })}
      </div>
    )
  }
}

export default PHome
