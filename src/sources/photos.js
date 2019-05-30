import {ownRequest} from '../utils/own-request'

const photosApi = {
  getByAlbumId: (albumId) => ownRequest.get(`/photos/?albumId=${albumId}`)
}


export default photosApi
