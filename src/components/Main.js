require('normalize.css/normalize.css')
require('styles/App.sass')

import React from 'react'

class AppComponent extends React.Component {
  constructor() {
    super()
    this.state = {text: 'Not clicked!'}
  }

  onButtonClick() {
    this.setState({text: 'Clicked!'})
  }

  render() {
    return (
      <div className="main">
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default AppComponent
