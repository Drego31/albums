
import React from 'react'

class Photos extends React.Component {
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
      </div>
    )
  }
}

export default Photos
