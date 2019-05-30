
import React from 'react'

class PPhoto extends React.Component {
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
        Photo
        {this.props.match.params.photoId}
      </div>
    )
  }
}

export default PPhoto
