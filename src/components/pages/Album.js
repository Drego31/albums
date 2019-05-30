import React from 'react'
import {Link} from 'react-router-dom'
import photosApi from 'sources/photos'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'

class PAlbum extends React.Component {
  constructor() {
    super()
    this.state = {
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
  }

  render() {
    return (
      <div className="t-page p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">Some album title</div>
          <Link to={`/user/${this.props.match.params.albumId}`} className="a-subtitle f-page">by User Name</Link>
        </div>
        {String(this.state.photos)}
      </div>
    )
  }
}

export default PAlbum
