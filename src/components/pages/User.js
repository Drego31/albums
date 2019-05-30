
import React from 'react'

class PUser extends React.Component {
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
        User
        {this.props.match.params.photoId}
      </div>
    )
  }
}

export default PUser
