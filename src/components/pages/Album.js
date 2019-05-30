import React from 'react'
import {Link} from 'react-router-dom'
import photosApi from 'sources/photos'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import albumsApi from 'sources/albums'
import usersApi from 'sources/users'
import MMiniPhoto from 'components/molecules/MiniPhoto'

class PAlbum extends React.Component {
  constructor() {
    super()
    this.state = {
      album: {},
      userName: '',
      photos: []
    }
  }

  componentDidMount() {
    photosApi.getAllByAlbumId(this.props.match.params.albumId)
      .then(json => this.setState({
        photos: json,
        message: ''
      }))
      .catch(() => this.setState({
        photos: [],
        message: WRONG_CONNECTION_MESSAGE
      }))

    albumsApi.getByAlbumId(this.props.match.params.albumId)
      .then(json => {
        this.setState({album: json})
        this.updateUserName(json.userId)
      })
      .catch(() => this.setState({album: {}}))
  }

  updateUserName(userId) {
    usersApi.getByUserId(userId)
      .then(json => this.setState({userName: json.username}))
      .catch(() => this.setState({userName: ''}))
  }

  getPhotos() {
    return this.state.photos.map(photo => (
      <MMiniPhoto key={photo.id} photo={photo}/>
    ))
  }

  render() {
    return (
      <div className="t-page p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">{this.state.album.title}</div>
          <Link
            to={`/user/${this.props.match.params.albumId}`}
            className="a-subtitle f-page"
          >
            by {this.state.userName}
          </Link>
        </div>
        <div className="f-flex-wrap f-flex-center">
          {this.getPhotos()}
        </div>
      </div>
    )
  }
}

export default PAlbum
