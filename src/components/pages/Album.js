import React from 'react'
import {Link} from 'react-router-dom'
import photosApi from 'sources/photos'
import albumsApi from 'sources/albums'
import usersApi from 'sources/users'
import MMiniPhoto from 'components/molecules/MiniPhoto'
import TPage from 'components/templates/page'

class PAlbum extends React.Component {
  constructor() {
    super()
    this.state = {
      album: {},
      user: {},
      photos: []
    }
  }

  componentDidMount() {
    photosApi.getAllByAlbumId(this.props.match.params.albumId)
      .then(json => this.setState({photos: json}))
      .catch(() => this.setState({photos: []}))

    albumsApi.getByAlbumId(this.props.match.params.albumId)
      .then(json => {
        this.setState({album: json})
        this.updateUserName(json.userId)
      })
      .catch(() => this.setState({album: {}}))
  }

  updateUserName(userId) {
    usersApi.getByUserId(userId)
      .then(json => this.setState({user: json}))
      .catch(() => this.setState({user: {}}))
  }

  getPhotos() {
    return this.state.photos.map(photo => (
      <MMiniPhoto key={photo.id} photo={photo}/>
    ))
  }

  render() {
    return (
      <TPage className="p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">{this.state.album.title}</div>
          <Link
            to={`/user/${this.state.user.id}`}
            className="a-subtitle f-page"
          >
            by {this.state.user.username}
          </Link>
        </div>
        <div className="f-flex-wrap f-flex-center">
          {this.getPhotos()}
        </div>
      </TPage>
    )
  }
}

export default PAlbum
