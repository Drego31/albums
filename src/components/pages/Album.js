import React from 'react'
import {Link} from 'react-router-dom'

class PAlbum extends React.Component {
  constructor() {
    super()
    this.state = {text: 'Not clicked!'}
  }

  onButtonClick() {
    this.setState({text: 'Clicked!'})
  }

  render() {
    return (
      <div className="t-page p-album">
        <div className="f-pt-1 f-pb-2">
          <div className="a-title f-page">Some album title</div>
          <Link to={`/user/${this.props.match.params.albumId}`} className="a-subtitle f-page">by User Name</Link>
        </div>
        {this.props.match.params.albumId}?
      </div>
    )
  }
}

export default PAlbum
