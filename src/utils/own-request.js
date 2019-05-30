import {BASE_URL} from './macros'

export const ownRequest = {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url)
        .then(response => response.ok ? response.json() : reject())
        .then(json => resolve(json))
        .catch(e => reject(e))
    })
  }
}
