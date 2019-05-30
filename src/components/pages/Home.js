
import React from 'react'
import AButtonAlbum from 'components/atoms/Button/Album'

class PHome extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      message: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albumsx/')
      .then(response => response.ok ? response.json() : [])
      .then(json => this.setState({
        albums: json,
        message: json.length > 0 ? '' : 'We have a problem with server connection... Come back later! :)'
      }))
      .catch(e => console.error(e))
  }

  render() {
    const content = () => {
      if (this.state.message !== '') {
        return <div className='a-message f-page'>{this.state.message}</div>
      } else {
        return this.state.albums.map(album => (
            <AButtonAlbum
              to={`/album/${album.id}`}
              key={album.id}
              title={album.title}
            />
          )
        )
      }
    }

    return (
      <div className="albums">
        {content()}
      </div>
    )
  }
}

export default PHome
