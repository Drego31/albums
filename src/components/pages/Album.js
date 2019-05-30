import React from 'react'
import {Link} from 'react-router-dom'
import photosApi from 'sources/photos'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import albumsApi from 'sources/albums'
import usersApi from 'sources/users'

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
    photosApi.getByAlbumId(this.props.match.params.albumId)
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
      .then(json => this.setState({userName: json.name}))
      .catch(() => this.setState({userName: ''}))
  }

  render() {
    return (
      <div className="t-page p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">{this.state.album.title}</div>
          <Link to={`/user/${this.props.match.params.albumId}`} className="a-subtitle f-page">
            by {this.state.userName}
          </Link>
        </div>
        {String(this.state.photos)}
      </div>
    )
  }
}

export default PAlbum
