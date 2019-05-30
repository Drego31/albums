import React from 'react'
import {connection} from 'stores/connection'

class TPage extends React.Component {
  constructor() {
    super()
  }

  render() {
    const content = () => {
      if (connection.correct) {
        return this.props.children
      } else {
        return <div className='a-message f-page'>{connection.message}</div>
      }
    }

    return (
      <div className={'t-page ' + this.props.className}>
        {content()}
      </div>
    )
  }
}

export default TPage
