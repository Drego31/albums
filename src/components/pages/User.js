import React from 'react'
import {WRONG_CONNECTION_MESSAGE} from '../../utils/macros'
import usersApi from 'sources/users'

class PUser extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        address: {
          geo: {}
        },
        company: {}
      }
    }
  }

  componentDidMount() {
    usersApi.getByUserId(this.props.match.params.userId)
      .then(json => this.setState({
        user: json,
        message: ''
      }))
      .catch(() => this.setState({
        user: {
          address: {
            geo: {}
          },
          company: {}
        },
        message: WRONG_CONNECTION_MESSAGE
      }))
  }

  render() {
    return (
      <div className="t-page p-user">
        <div className="f-py-1">
          <div className="a-title f-page">{this.state.user.username}</div>
        </div>
        <div className="f-pt-1 f-pl-1">
          <div className="f-text-bold f-pb-1">
            {this.state.user.name}
          </div>
          <div>{this.state.user.email}</div>
          <div>{this.state.user.phone}</div>
          <div>{this.state.user.website}</div>
          <div className="f-text-light f-text-bold f-pt-1">
            Address:
          </div>
          <div className="f-pl-2 f-pb-1">
            <div>{this.state.user.address.street}</div>
            <div>{this.state.user.address.suite}</div>
            <div>{this.state.user.address.city}</div>
            <div>
              <span className="f-text-light f-text-bold">zipcode: </span>
              {this.state.user.address.zipcode}
            </div>
            <div>
              <span className="f-text-light f-text-bold">lat: </span>
              {this.state.user.address.geo.lat}
            </div>
            <div>
              <span className="f-text-light f-text-bold">lng: </span>
              {this.state.user.address.geo.lng}
            </div>
          </div>
          <div className="f-text-light f-text-bold f-pt-1">
            Company:
          </div>
          <div className="f-pl-2 f-pb-1">
            <div>{this.state.user.company.name}</div>
            <div>{this.state.user.company.catchPhrase}</div>
            <div>{this.state.user.company.bs}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PUser
