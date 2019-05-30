import {ownRequest} from '../utils/own-request'

const albumsApi = {
  getAll: () => ownRequest.get('/albums/')
}


export default albumsApi
