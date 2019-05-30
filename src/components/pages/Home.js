
import React from 'react'
import AButtonAlbum from 'components/atoms/Button/Album'
import albumsApi from 'sources/albums'

class PHome extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      message: '',
    }
  }

  componentDidMount() {
    albumsApi.getAll()
      .then(json => this.setState({
        albums: json,
        message: '',
      }))
      .catch(() => this.setState({
        albums: [],
        message: 'We have a problem with server connection... Come back later! :)'
      }))
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
      <div className="p-home t-page">
        {content()}
      </div>
    )
  }
}

export default PHome
