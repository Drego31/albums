
import React from 'react'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import photosApi from 'sources/photos'

class PPhoto extends React.Component {
  constructor() {
    super()
    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    photosApi.getById(this.props.match.params.photoId)
      .then(json => this.setState({
        photo: json,
        message: ''
      }))
      .catch(() => this.setState({
        photo: {},
        message: WRONG_CONNECTION_MESSAGE
      }))
  }

  render() {
    return (
      <div className="t-page p-photo">
        <div className="f-py-1">
          <div className="a-title f-page">{this.state.photo.title}</div>
        </div>
        <img className="a-photo f-full" src={this.state.photo.url} />
      </div>
    )
  }
}

export default PPhoto
