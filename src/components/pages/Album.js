
import React from 'react'

class Album extends React.Component {
  constructor() {
    super()
    this.state = {text: 'Not clicked!'}
  }

  onButtonClick() {
    this.setState({text: 'Clicked!'})
  }

  render() {
    return (
      <div className="albums">
        Photos
        {this.props.match.params.albumId}?
      </div>
    )
  }
}

export default Album
