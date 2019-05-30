import {ownRequest} from '../utils/own-request'

const photosApi = {
  getByAlbumId(albumId) {
    return ownRequest.get(`/photos/?albumId=${albumId}`)
  }
}


export default photosApi
