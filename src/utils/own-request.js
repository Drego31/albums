import {BASE_URL, WRONG_CONNECTION_MESSAGE} from './macros'
import {connection} from 'stores/connection'

export const ownRequest = {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url)
        .then(response => {
          if (response.ok) {
            connection.correct = true
            connection.message = ''
            return response.json()
          } else {
            connection.correct = false
            connection.message = WRONG_CONNECTION_MESSAGE
            return reject()
          }
        })
        .then(json => resolve(json))
        .catch(e => {
          connection.correct = false
          connection.message = WRONG_CONNECTION_MESSAGE
          reject(e)
        })
    })
  }
}
