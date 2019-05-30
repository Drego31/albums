import {ownRequest} from '../utils/own-request'

const albumsApi = {
  getAll() {
    return ownRequest.get('/albums/')
  }
}


export default albumsApi
