import React from 'react'
import {Link} from 'react-router-dom'
import photosApi from 'sources/photos'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import albumsApi from 'sources/albums'

class PAlbum extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
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
      .then(json => this.setState({title: json.title}))
      .catch(() => this.setState({title: ''}))
  }

  render() {
    return (
      <div className="t-page p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">{this.state.title}</div>
          <Link to={`/user/${this.props.match.params.albumId}`} className="a-subtitle f-page">by User Name</Link>
        </div>
        {String(this.state.photos)}
      </div>
    )
  }
}

export default PAlbum
