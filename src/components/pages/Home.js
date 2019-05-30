import React from 'react'
import AButtonAlbum from 'components/atoms/Button/Album'
import albumsApi from 'sources/albums'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import {Link} from 'react-router-dom'
import TPage from 'components/templates/page'

class PHome extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    albumsApi.getAll()
      .then(json => this.setState({albums: json}))
      .catch(() => this.setState({albums: []}))
  }

  render() {
    const content = () => {
      return this.state.albums.map(album => (
        <AButtonAlbum
          to={`/album/${album.id}`}
          key={album.id}
          title={album.title}
        />
      ))
    }

    return (
      <TPage className="p-home">
        <div className="f-py-1">
          <div className="a-title f-page">Choose album</div>
        </div>
        {content()}
      </TPage>
    )
  }
}

export default PHome
