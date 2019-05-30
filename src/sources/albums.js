import {BASE_URL} from '../utils/macros'

const albumsApi = {
  getAll() {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/albums/`)
        .then(response => response.ok ? response.json() : reject())
        .then(json => resolve(json))
        .catch(e => reject(e))
    })
  }
}


export default albumsApi
